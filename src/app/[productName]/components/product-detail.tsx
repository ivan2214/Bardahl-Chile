import React, { type MouseEventHandler } from 'react'
import { Button } from '@/components/ui/button'
import { usePreviewModal } from '@/hooks'
import { type Product } from '@/types'

interface ProductDetailProps {
  productDetail: Product

}

const ProductDetail: React.FC<ProductDetailProps> = ({
  productDetail

}) => {
  const { onOpen } = usePreviewModal()

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    onOpen(productDetail.url)
  }

  return (
    <section className="body-font overflow-hidden bg-white text-gray-700">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <Button
            className="h-full w-full border-transparent bg-transparent lg:w-1/3 "
            onClick={onPreview}
          >
            <img
              alt="ecommerce"
              className=" rounded  object-cover object-center"
              src={productDetail?.url || 'https://via.placeholder.com/450x450'}
            />
          </Button>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="title-font mb-1 text-3xl font-bold text-gray-900">
              {productDetail?.name}
            </h2>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <span className="title-font text-sm tracking-widest text-gray-500">
                  {productDetail?.categoria}
                </span>
              </span>
              <span className="ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <div className="flex flex-col items-start gap-3">
                <p className="text-sm font-extralight text-gray-400">
                  {productDetail?.descripcion}
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-8 lg:gap-4">
                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                  <span className="text-base font-bold uppercase">
                    POR QUE USARLO:
                  </span>
                  <p className="text-sm font-extralight text-gray-400">
                    {productDetail?.whyUseIt}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                  <span className="text-base font-bold uppercase">
                    BENEFICIOS:
                  </span>
                  <p className="text-sm font-extralight text-gray-400">
                    {productDetail?.benefic}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                  <span className="text-base font-bold uppercase">
                    Instrucciones:
                  </span>
                  <p className="text-sm font-extralight text-gray-400">
                    {productDetail?.instrucctions}
                  </p>
                </div>
                {productDetail?.prestaciones && (
                  <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                    <span className="text-base font-bold uppercase">
                      Prestaciones:
                    </span>
                    <p className="text-sm font-extralight text-gray-400">
                      {productDetail?.prestaciones}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
