"use client"
import { SearchSchema } from '@/src/schema'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function ProductSearchForm() {
  const router = useRouter()

  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get('search')
    }
    const result = SearchSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })
      return
    }
    router.push(`/admin/products/search?search=${result.data?.search}`)
  }

  return (
    <form
      action={handleSearchForm}
      className="flex items-center max-w-md ml-auto mt-8 shadow-md rounded-lg overflow-hidden"
    >
      <input
        type="text"
        placeholder="Buscar producto..."
        name="search"
        className="p-3 w-full text-gray-700 placeholder-gray-500 focus:outline-none bg-[#f8f0e6]"
      />
      <input
        type="submit"
        value="Buscar"
        className="bg-amber-500 hover:bg-amber-600 p-3 uppercase text-white font-bold cursor-pointer transition duration-300"
      />
    </form>
  )
}
