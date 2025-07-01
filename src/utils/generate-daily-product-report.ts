import { prisma } from '@/src/lib/prisma'

export type DailyProductReport = {
  productId: number
  productName: string
  categoryId: number
  categoryName: string
  quantitySold: number
  subtotal: number
}

export async function generateProductReport(
  start: Date,
  end: Date
): Promise<DailyProductReport[]> {
  const orders = await prisma.order.findMany({
    where: {
      date: {
        gte: start,
        lte: end,
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
  }) as Array<{
    id: number
    name: string
    date: Date
    total: number
    status: boolean
    orderReadyAt: Date | null
    orderProducts: Array<{
      quantity: number
      product: {
        id: number
        name: string
        price: number
        category: {
          id: number
          name: string
        }
      }
    }>
  }>

  const reportMap = new Map<number, DailyProductReport>()

  orders.forEach((order) => {
    order.orderProducts.forEach((op) => {
      const productId = op.product.id
      const subtotal = op.quantity * op.product.price
      const current = reportMap.get(productId)

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
  reportArray.sort(
    (a, b) =>
      a.categoryName.localeCompare(b.categoryName) ||
      a.productName.localeCompare(b.productName)
  )
  return reportArray
}
