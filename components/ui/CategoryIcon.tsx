'use client'
import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type CategoryIconProps = {
  category: Category

}


export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>()
  return (
    <div
      className={`${category.slug === params.category ? 'bg-amber-400' : ''
        } flex items-center gap-4 w-full border-t border-orange-200 p-3 last-of-type:border-b`}>
      <div className='w-16 h-16 relative'>
        <Image
          fill
          src={`/icon_${category.slug}.svg`}
          alt="Imagen Categoria"
        />
      </div>
      <Link
        className='text-sm font-bold'
        href={`/order/${category.slug}`}>
        {category.name}
      </Link>
    </div>
  )
}
