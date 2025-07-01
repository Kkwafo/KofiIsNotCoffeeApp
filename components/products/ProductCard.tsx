import AddProductButton from '@/components/products/AddProductButton'
import { formatCurrency, getImagePath } from '@/src/utils'
import { Product } from '@prisma/client'
import Image from 'next/image'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = getImagePath(product.image);

  return (
    <div className="border rounded-2xl bg-[#F8F0E6] shadow-lg overflow-hidden flex flex-col w-64 min-h-[28rem] max-h-[28rem]">
      <div className="relative w-full aspect-[4/3] bg-[#F8F0E6] rounded-[2rem] overflow-hidden mt-5">
        <Image
          src={imagePath}
          alt={`Imagen del producto ${product.name}`}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
            {product.name}
          </h3>

          <p className="mt-2 font-black text-3xl text-amber-600">
            {formatCurrency(product.price)}
          </p>
        </div>

        <AddProductButton product={product} />
      </div>
    </div>
  );
}
