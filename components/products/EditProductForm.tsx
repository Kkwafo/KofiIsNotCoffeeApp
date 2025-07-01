"use client"

import { ProductSchema } from '@/src/schema'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useParams } from 'next/navigation'
import { updateProduct } from '@/actions/update-product-action'

export default function EditProductForm({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const params = useParams()
  const id = +params.id!
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: formData.get('categoryId'),
      image: formData.get('image')
    }
    const result = ProductSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach(issues => {
        toast.error(issues.message)
      });
      return
    }
    const response = await updateProduct(result.data, id)
    if (response?.errors) {
      response.errors.forEach(issue => {
        toast.error(issue.message)
      });
      return
    }
    toast.success('Producto Actualizado Correctamente')
    router.push('/admin/products')

  }
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadown-md max-w-3xl mx-auto">
      <form action={handleSubmit}
        className="space-y-5"
      >
        {children}
        <input
          type="submit"
          className="py-3 rounded-xl uppercase text-white bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 w-full text-center cursor-pointer font-bold shadow-lg transition duration-300"
          value="Guardar Cambios"
        />
      </form>
    </div>
  )
}
