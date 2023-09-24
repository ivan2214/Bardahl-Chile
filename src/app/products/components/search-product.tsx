import useProductsStore from '@/stores/productsStore'
import React from 'react'

const SearchProduct = () => {
  const { searchProducts } = useProductsStore()
  return (
    <div className="relative flex max-w-xs items-center">
      <svg
        className="absolute left-0 ml-2 h-4 w-4 fill-current text-gray-400"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input
        onChange={(e) => {
          searchProducts(e.target.value)
        }}
        placeholder="Search"
        type="search"
        className="h-10 w-full rounded-lg border border-transparent bg-gray-100 pl-10 pr-4 outline-none transition duration-300 ease-in-out hover:bg-white focus:border-pink-500"
      />
    </div>
  )
}

export default SearchProduct
