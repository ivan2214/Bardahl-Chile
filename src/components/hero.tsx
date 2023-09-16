import React from 'react'
import { Carrousel } from './carrousel'

const hero = () => {
  const images = [
    'images/banner-inicio-moto.webp',
    'images/banner-inicio-lancha-2.webp',
    'images/banner-inicio-auto.webp'
  ]
  return (
    <section className="container grid h-full w-full grid-cols-1 gap-y-5 py-5 md:grid-cols-2 md:gap-x-20">
      <section className="w-full">
        <Carrousel images={images} />
      </section>
      <section className="w-full">
        <div className="flex w-full flex-col items-start gap-y-4">
          <h2 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-xs font-extralight max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            corrupti officiis quos laborum magni ut, ea dignissimos ducimus
            dicta assumenda harum quis minus, at natus obcaecati sint facere
            porro eos?
          </p>
        </div>
      </section>
    </section>
  )
}

export default hero
