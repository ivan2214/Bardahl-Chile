'use client'
import useProductsStore from '@/stores/productsStore'
import React, { useEffect } from 'react'
import ProductDetail from './components/product-detail'

interface ProductDetailPageProps {
  params: {
    productName: string
  }
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const { getProductDetail, productDetail } = useProductsStore()
  const { productName } = params

  useEffect(() => {
    getProductDetail(productName)
  }, [productName])

  return (
    <ProductDetail productDetail={productDetail} />
  )
}

export default ProductDetailPage
