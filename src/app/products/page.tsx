'use client'
import Container from '@/components/ui/container'
import Heading from '@/components/ui/heading'
import ProductList from './components/ProductList'
import Pagination from './components/Pagination'

import { Suspense, useEffect } from 'react'
import useProductsStore from '@/stores/productsStore'
import Skeleton from '@/components/ui/skeleton'

import SearchProduct from './components/search-product'

const ProductPage = () => {
  const { products, getProducts, setLoading, loading } = useProductsStore()

  useEffect(() => {
    setLoading(true)
    getProducts()

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <Container className="flex flex-col items-center gap-4 lg:p-8">
      <Heading title="Productos" description="Todos los productos" />
      <main className="flex flex-col gap-y-16">
        <section className="flex w-full flex-col items-center justify-between gap-y-5 bg-white px-5 py-5 md:flex-row">
          <SearchProduct />
          <Pagination />
        </section>
        <Suspense fallback={<Skeleton />}>
          <ProductList products={products} loading={loading} />
        </Suspense>
      </main>
    </Container>
  )
}

export default ProductPage
