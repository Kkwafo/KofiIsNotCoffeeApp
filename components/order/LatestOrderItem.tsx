import { OrderWithProducts } from '@/src/types'

type LatestOrderItemProps = {
  order: OrderWithProducts
}
export default function LatestOrderItem({ order }: LatestOrderItemProps) {
  return (
    <div className='bg-white shadow p-5 space-y-5 rounded-lg'>
      <p className='text-2xl font-bold text-slate-600'>
        Cliente:{order.name}
      </p>
      <ul
        className='divide-y divide-gary-200 border-t border-orange-200 text-sm font-midium text-orange-500'
        role='list'
      >
        {order.orderProducts.map(product => (
          <li
            key={product.id}
            className='flex py-6 text-lg'>
            <span className='font-bold'>
              ({product.quantity}) {''}
            </span>
            <p>{product.product.name}</p>

          </li>
        ))}
      </ul>
    </div>
  )
}
