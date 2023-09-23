// En useProductsStore.ts

import { productsDb } from '@/data/products'
import { type Product } from '@/types'
import { create } from 'zustand'

interface State {
  products: Product[]
  page: number
  productsPerPage: number
  loading: boolean
}

interface Actions {
  setCurrentPage: (page: number) => void
  getProducts: () => void
  setLoading: (loading: boolean) => void
  nextPage: () => void // Agregar nextPage
  prevPage: () => void // Agregar prevPage
  searchProducts: (query: string) => void
}

const productsPerPage = 10 // Cambia el número de productos por página según tus necesidades

const initialState: State = {
  products: [],
  page: 1,
  productsPerPage,
  loading: false
}
let debounceTimeout: any

const useProductsStore = create<State & Actions>()(
  (set, get) => ({
    ...initialState,
    setCurrentPage: (page) => {
      const startIndex = (page - 1) * productsPerPage
      const endIndex = startIndex + productsPerPage
      const products = get().products.slice(startIndex, endIndex)

      set({ page, products })
    },
    getProducts: () => {
      const products = productsDb.slice(0, productsPerPage)
      set({ products })
    },
    setLoading: (loading) => { set({ loading }) },
    nextPage: () => {
      set({ loading: true })
      const currentPage = get().page
      const totalPages = Math.ceil(productsDb.length / productsPerPage)

      if (currentPage < totalPages) {
        const nextPage = currentPage + 1
        const startIndex = (nextPage - 1) * productsPerPage
        const endIndex = startIndex + productsPerPage
        const products = productsDb.slice(startIndex, endIndex)

        set({ page: nextPage, products })
        set({ loading: false })
      }
    },
    prevPage: () => {
      set({ loading: true })
      const currentPage = get().page

      if (currentPage > 1) {
        const prevPage = currentPage - 1
        const startIndex = (prevPage - 1) * productsPerPage
        const endIndex = startIndex + productsPerPage
        const products = productsDb.slice(startIndex, endIndex)

        set({ page: prevPage, products })
        set({ loading: false })
      }
    },
    searchProducts: (query) => {
      clearTimeout(debounceTimeout) // Limpiar el timeout anterior

      // Configurar un nuevo timeout para realizar la búsqueda después de un breve retraso (por ejemplo, 300ms)
      debounceTimeout = setTimeout(() => {
        const filteredProducts = productsDb.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )

        set({ products: filteredProducts })
      }, 400)
    }
  })
)

export default useProductsStore
