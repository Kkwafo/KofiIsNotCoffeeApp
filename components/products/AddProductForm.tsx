"use client"

import { createProduct } from '@/actions/create-product-action'
import { ProductSchema } from '@/src/schema'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function AddProductForm({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: formData.get('categoryId'),
      image: formData.get('image'),
    }

    const result = ProductSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })
      return
    }

    const response = await createProduct(result.data)
    if (response?.errors) {
      response.errors.forEach(issue => {
        toast.error(issue.message)
      })
      return
    }

    toast.success('Producto creado correctamente')
    router.push('/admin/products')
  }

  return (
    <div className="bg-[#F8F0E6] mt-10 px-6 py-10 rounded-2xl shadow-lg max-w-3xl mx-auto">

      <form action={handleSubmit} className="space-y-6">
        {children}
        <input
          type="submit"
          className="py-3 rounded-xl uppercase text-white bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 w-full text-center cursor-pointer font-bold shadow-lg transition duration-300"
          value="Registrar Producto"
        />
      </form>
    </div>
  )
}
