"use client"

import { ProductSchema } from '@/src/schema'
import { toast } from 'react-toastify'

export default function AddProductForm({ children }: { children: React.ReactNode }) {
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: formData.get('categoryId')
    }
    const result = ProductSchema.safeParse(data)
    console.log(result)
    if (!result.success) {
      result.error.issues.forEach(issues => {
        toast.error(issues.message)
      });
      return
    }
  }
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadown-md max-w-3xl mx-auto">
      <form action={handleSubmit}
        className="space-y-5"
      >
        {children}
        <input
          type="submit"
          className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
          value='Registrar Producto'
        />

      </form>
    </div>
  )
}
