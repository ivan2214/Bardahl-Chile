import React from 'react'
import CardProduct from './CardProduct'
import Skeleton from '@/components/ui/skeleton'
import { type Product } from '@/types'

interface Props {
  products: Product[]
  loading: boolean
}

const ProductList = ({ products, loading }: Props) => {
  console.log(products)

  return (
    <section className="grid grid-cols-2 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
      {products.length > 0 && !loading
        ? products.map((product) => (
            <CardProduct key={product.id} product={product} />
        ))
        : Array.from({ length: products.length || 6 }).map((_, index) => (
            <Skeleton key={index} cardWidth="w-40 md:w-64" />
        ))}
    </section>
  )
}

export default ProductList
