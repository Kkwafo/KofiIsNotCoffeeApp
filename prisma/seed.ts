import { categories } from './data/categories'
import { products } from './data/products'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.category.createMany({
      data: categories,
    })
    await prisma.product.createMany({
      data: products,
    })
  } catch (error) {
    console.error('Error during Prisma Client initialization:', error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Error during Prisma Client execution:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
