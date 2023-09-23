import React from 'react'
import useProductsStore from '@/stores/productsStore'
import { Button } from '@/components/ui/button'
import { productsDb } from '@/data/products'

const Pagination = () => {
  const { page, nextPage, prevPage, productsPerPage } = useProductsStore()

  return (
    <section className="flex w-fit items-center justify-center gap-x-4 gap-y-4 ">
      <Button
        className="bg-primary"
        onClick={() => {
          prevPage()
        }}
        disabled={page === 1}
      >
        Anterior
      </Button>
      <span>
        Página {page} de {Math.ceil(productsDb.length / productsPerPage)}{' '}
        {/* Calcula el número total de páginas */}
      </span>
      <Button
        className="bg-primary"
        onClick={() => {
          nextPage()
        }}
        disabled={page === Math.ceil(productsDb.length / productsPerPage)}
      >
        Siguiente
      </Button>
    </section>
  )
}

export default Pagination
