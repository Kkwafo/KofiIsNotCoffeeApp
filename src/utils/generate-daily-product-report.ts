import { prisma } from '@/src/lib/prisma'

export type DailyProductReport = {
  productId: number
  productName: string
  categoryId: number
  categoryName: string
  quantitySold: number
  subtotal: number
}

export async function generateDailyProductReport(): Promise<
  DailyProductReport[]
> {
  const startOfDay = new Date()
  startOfDay.setHours(0, 0, 0, 0)

  const endOfDay = new Date()
  endOfDay.setHours(23, 59, 59, 999)

  const ordersToday = await prisma.order.findMany({
    where: {
      orderReadyAt: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    include: {
      orderProducts: {
        include: {
          product: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  })

  const reportMap = new Map<number, DailyProductReport>()

  ordersToday.forEach((order) => {
    order.orderProducts.forEach((op) => {
      const productId = op.product.id
      const current = reportMap.get(productId)
      const subtotal = op.quantity * op.product.price

      if (current) {
        current.quantitySold += op.quantity
        current.subtotal += subtotal
      } else {
        reportMap.set(productId, {
          productId,
          productName: op.product.name,
          categoryId: op.product.category.id,
          categoryName: op.product.category.name,
          quantitySold: op.quantity,
          subtotal,
        })
      }
    })
  })

  const reportArray = Array.from(reportMap.values())

  // Ordenar por categoría y luego por producto
  reportArray.sort((a, b) => {
    if (a.categoryName < b.categoryName) return -1
    if (a.categoryName > b.categoryName) return 1
    return a.productName.localeCompare(b.productName)
  })

  return reportArray
}
