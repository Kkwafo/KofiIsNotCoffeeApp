/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { CldUploadWidget } from 'next-cloudinary'
import { useState } from 'react';
import { TbPhotoPlus } from 'react-icons/tb'
import Image from 'next/image';
import { getImagePath } from '@/src/utils';
export default function ImageUpload({ image }: { image: string | undefined }) {
  const [ imageUrl, setImageUrl ] = useState('');


  return (
    <CldUploadWidget
      uploadPreset='sbd7objh'
      options={{ maxFiles: 1 }}
      onSuccess={(result, { widget }) => {
        if (result.event === 'success') {
          widget.close()
          //@ts-expect-error
          setImageUrl(result.info?.secure_url)
        }
      }}>
      {({ open }) => (
        <>
          <div
            className='space-y-2'>
            <label className='text-slate-800'>
              Imagen Producto
            </label>
            <div
              className='relative cursor-pointer gover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'
              onClick={() => open()}>
              <TbPhotoPlus
                size={50}
              />
              <p className='text-lg font-semibold'>Agregar Imagen</p>
              {imageUrl && (
                <div className='absolute inset-o w-full h-full'>
                  <Image
                    fill
                    style={{ objectFit: 'contain' }}
                    src={imageUrl}
                    alt='Imagen de Producto'
                  >

                  </Image>
                </div>
              )}
            </div>
          </div>
          {image && !imageUrl && (
            <div className='space-y-2'>
              <label>Imagen Actual:</label>
              <div className='relative w-65 h-64'>
                <Image
                  fill
                  src={getImagePath(image)}
                  alt='Imagen Producto'
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          )}
          <input
            type='hidden'
            name='image'
            defaultValue={imageUrl ? imageUrl : image}
          />
        </>
      )}

    </CldUploadWidget>
  )
}
