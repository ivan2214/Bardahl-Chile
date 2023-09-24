import Heading from '@/components/ui/heading'
import InformationVideo from '@/presentation/InformationVideo/information-video'
import React from 'react'
import { consejos as consejosDB } from '@/data/consejos'
import { type Tip } from '@/types'
import TipCard from './components/tip-card'

const TipsPage = () => {
  const consejos: Tip[] = [...consejosDB]
  return (
    <main className='container mt-5 '>
      <section className="flex flex-col items-center justify-center gap-5">
        <section className="flex max-w-6xl flex-col items-start justify-center gap-5 lg:flex-row">
          <img
            width="500"
            height="100"
            className="rounded-lg object-cover"
            src="/consejos/Nota-vacaciones-invierno-2022.jpg"
            alt="asdsas"
          />
          <div className="flex flex-col items-start justify-center gap-10">
            <div className="flex flex-col items-center justify-center gap-5">
              <Heading title="Consejos para salir en el auto en vacaciones de invierno" />
              <p className="text-sm font-light">
                Se acercan las vacaciones de invierno, muchos aprovechan para
                tomarse vacaciones en el país, saliendo a la ruta, en viajes
                tanto largos como cortos. Dada la amplitud de nuestro país, nos
                encontramos con variaciones térmicas donde las temperaturas
                pueden llegan a menos de 0 grados, pudiendo afectar al motor,
                por eso es importante seguir los siguientes consejos antes de
                viajar.
              </p>
            </div>

            <span className="text-sm font-semibold">
              Nuestros <span className="text-cyan-500">#ConsejosBardahl</span>{' '}
              recomendados:
            </span>
            <section className="grid grid-cols-2 place-items-center gap-5 lg:grid-cols-3">
              <a target='_blank' href="https://www.instagram.com/p/CTp5KrFB3qx/" rel="noreferrer">
                <img
                  src="/consejos/Consejos-Bardahl-tips-salir-de-la-ruta.jpg"
                  width="200"
                  height="200"
                  alt=""
                  className="rounded-lg"
                />
              </a>
              <a target='_blank' href="https://www.instagram.com/p/CQehcOWjQb4/" rel="noreferrer">
                <img
                  src="/consejos/Consejos-Bardahl-viajes-en-moto-1.png"
                  width="200"
                  height="200"
                  alt=""
                  className="rounded-lg"
                />
              </a>
              <a target='_blank' href="https://www.instagram.com/p/CK7KKA1jen6/" rel="noreferrer">
                <img
                  src="/consejos/Consejos-Bardahl-tips-salir-de-la-ruta-1.jpg"
                  width="200"
                  height="200"
                  alt=""
                  className="rounded-lg"
                />
              </a>
            </section>
          </div>
        </section>

        <div className="flex w-full flex-col items-center justify-center gap-10 py-10">
          <Heading title="Galeria de consejos" />
          <span className="text-center text-sm font-light">
            Haz clic en las imágenes para explorar nuestros consejos y obtener
            una mejor experiencia
          </span>

          <section className="grid grid-cols-2 gap-0 bg-black md:grid-cols-3">
            {consejos.map((tip, index) => (
              <TipCard key={index} tip={tip} />
            ))}
          </section>
        </div>
      </section>
      <InformationVideo />
    </main>
  )
}

export default TipsPage
