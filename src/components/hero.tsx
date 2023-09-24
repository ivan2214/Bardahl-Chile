import React from 'react'
import { Carrousel } from './carrousel'

const hero = () => {
  const images = [
    'images/banner-inicio-moto.webp',
    'images/banner-inicio-lancha-2.webp',
    'images/banner-inicio-auto.webp'
  ]
  return (
    <section className="container grid h-full w-full grid-cols-1 gap-y-5 py-5 md:gap-x-20">
      <section className="h-full w-full">
        <Carrousel images={images} />
      </section>
    </section>
  )
}

export default hero
