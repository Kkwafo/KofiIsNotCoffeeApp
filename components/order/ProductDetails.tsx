import { useStore } from '@/src/store'
import { OrderItem } from '@/src/types/'
import { formatCurrency } from '@/src/utils'
import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react'

type ProductDetailsProps = {
  item: OrderItem
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export default function ProductDetails({ item }: ProductDetailsProps) {
  const increaseQuantity = useStore((state) => state.increaseQuantity) as (id: number) => void
  const decreaseQuantity = useStore((state) => state.decreaseQuantity) as (id: number) => void
  const removeItem = useStore((state) => state.removeItem)

  const disabledDecreaseButton = useMemo(() => item.quantity === MIN_ITEMS, [ item ])
  const disabledIncreaseButton = useMemo(() => item.quantity === MAX_ITEMS, [ item ])

  return (
    <div className="shadow-lg rounded-2xl p-5 bg-[#F8F0E6] border-t border-amber-200 space-y-4">
      <div className="flex justify-between items-start">
        <p className="text-xl font-bold text-gray-800">{item.name}</p>
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="hover:scale-110 transition-transform"
        >
          <XCircleIcon className="text-red-600 h-8 w-8" />
        </button>
      </div>

      <p className="text-2xl text-amber-600 font-black">
        {formatCurrency(item.price)}
      </p>

      <div className="flex items-center justify-center gap-5 bg-white p-2 rounded-xl shadow-inner w-fit mx-auto">
        <button
          type="button"
          onClick={() => decreaseQuantity(item.id)}
          disabled={disabledDecreaseButton}
          className="p-2 rounded-md bg-amber-500 hover:bg-amber-600 text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          <MinusIcon className="h-5 w-5" />
        </button>

        <p className="text-lg font-black text-gray-800 min-w-[1.5rem] text-center">
          {item.quantity}
        </p>

        <button
          type="button"
          onClick={() => increaseQuantity(item.id)}
          disabled={disabledIncreaseButton}
          className="p-2 rounded-md bg-amber-500 hover:bg-amber-600 text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>

      <p className="text-xl font-black text-gray-800">
        Subtotal:{' '}
        <span className="font-normal">
          {formatCurrency(item.subtotal)}
        </span>
      </p>
    </div>
  )
}
