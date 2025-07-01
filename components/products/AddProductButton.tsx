"use client"
import { Product } from '@prisma/client'
import { useStore } from '@/src/store'

type AddProductButtonProps = {
  product: Product
}

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder)
  return (
    <button
      className="bg-amber-500 hover:bg-amber-600 text-white w-full mt-auto py-3 px-4 uppercase font-bold rounded-xl shadow-md transition duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  )
}
