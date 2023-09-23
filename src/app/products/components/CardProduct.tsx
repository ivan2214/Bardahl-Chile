import { type Product } from '@/types'
import React from 'react'

interface Props {
  product: Product
}

const CardProduct = ({ product }: Props) => {
  return (
    <article className="w-64">
      <section>
        <div className="relative block overflow-hidden">
          <a href={`/productos/${encodeURIComponent(product.name)}`}>
            <img
              loading="lazy"
              className="mx-auto max-h-full w-full  max-w-full object-cover align-middle"
              src={product?.url || 'https://via.placeholder.com/256'}
              alt={product?.name}
            />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <span className="text-center text-sm font-light capitalize lg:text-base">
            {product.name}
          </span>
          {product.categoria && (
            <span className="text-center text-xs font-extralight capitalize ">
              {product.categoria}
            </span>
          )}
        </div>
      </section>
    </article>
  )
}

export default CardProduct
