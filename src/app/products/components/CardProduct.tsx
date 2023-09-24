import { type Product } from '@/types'
import React from 'react'

interface Props {
  product: Product
}

const CardProduct = ({ product }: Props) => {
  return (
    <article className="h-full w-40 md:w-64">
      <section className="flex h-full flex-col items-center ">
        <div className="relative block rounded-lg drop-shadow-lg hover:shadow-2xl  h-2/3 overflow-hidden rounded border ">
          <a href={`/${encodeURIComponent(product.name)}`}>
            <img
              loading="lazy"
              width="256"
              height="256"
              className="mx-auto h-full max-h-full  w-full max-w-full object-cover align-middle"
              src={product?.url || 'https://via.placeholder.com/256'}
              alt={product?.name}
            />
          </a>
        </div>
        <div className="flex h-1/3 flex-col items-center justify-center  p-8">
          <span className="text-center text-sm font-extralight capitalize text-gray-500 lg:text-base">
            {product.name}
          </span>
        </div>
      </section>
    </article>
  )
}

export default CardProduct
