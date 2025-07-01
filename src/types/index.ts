import { Order, OrderProducts, Product } from '@prisma/client'

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
  quantity: number
  subtotal: number
}

export type OrderWithProducts = Order & {
  orderProducts: (OrderProducts & {
    product: Product
  })[]
}

export type DailyProductReport = {
  productId: number
  productName: string
  categoryId: number
  categoryName: string
  quantitySold: number
  subtotal: number // cantidad * precio
}
