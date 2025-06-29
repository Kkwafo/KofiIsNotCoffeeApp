'use server'

import { prisma } from '@/src/lib/prisma'
import { OrderSchema } from '@/src/schema'

export async function createOrderAction(data: unknown) {
  const result = OrderSchema.safeParse(data)
  if (!result.success) {
    return {
      errors: result.error.issues.map((issue) => ({
        message: issue.message,
      })),
    }
  }
  try {
    await prisma.order.create({
      data: {
        name: result.data.name,
        total: result.data.total,
        orderProducts: {
          create: result.data.order.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    })
  } catch (error) {
    console.error('Error creating order:', error)
    return {
      errors: [
        {
          message: 'Error creating order, please try again later.',
        },
      ],
    }
  }
}
