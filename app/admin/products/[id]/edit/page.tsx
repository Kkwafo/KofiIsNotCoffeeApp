import { prisma } from '@/src/lib/prisma'
import { redirect } from 'next/navigation'

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })
  if (!product) {
    redirect('/404')
  }
  return product
}

export default async function EditProductsPage({ params }: { params: { id: string } }) {

  const product = await getProductById(+params.id)
  console.log(product)
  return (
    <div>page</div>
  )
}
