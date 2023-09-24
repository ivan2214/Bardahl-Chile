import React from 'react'
import Heading from './ui/heading'
import Link from 'next/link'
import { Button } from './ui/button'

export function BardahlInChile () {
  return (
    <section className="flex w-full flex-col justify-center gap-10  py-10 lg:flex-row">
      <section className="flex w-full flex-col items-center justify-around gap-3 lg:flex-row lg:items-start ">
        <section className="flex flex-col items-start gap-10 lg:flex-row">
          <section className=" lg:border-bar flex  flex-col items-start justify-center gap-3 border-dashed lg:border-r-2 lg:pr-5">
            <div className="flex flex-col items-start justify-center gap-2">
              <img width="30" height="40" src="flag-chile.png" />
              <Heading title="Bardahl en Chile" />
            </div>
            <div className="flex max-w-xs flex-col items-start justify-center gap-6">
              <h3 className="text-lg font-normal">
                Protección confiable para tus máquinas y motores
              </h3>
              <p className="max-w-xs text-sm font-light leading-7">
                Bardahl ha sido el líder indiscutible en el cuidado y protección
                de máquinas y motores en Chile. Nuestra gama de productos
                innovadores y de calidad superior está meticulosamente diseñada
                para asegurar el rendimiento óptimo de tus vehículos y
                maquinarias.
              </p>
              <Button>
                <Link href="/about">Leer sobre Bardahl</Link>
              </Button>
            </div>
          </section>
          <div className="max-w-xs">
            <p className="max-w-xs text-sm font-light leading-7">
              Con un compromiso inquebrantable con el servicio al cliente,
              nuestro equipo de expertos está siempre dispuesto a brindarte
              asesoramiento técnico y resolver todas tus consultas. Puedes
              confiar plenamente en Bardahl para proteger tu inversión y
              asegurar que tus vehículos y maquinarias funcionen de manera suave
              y eficiente.
            </p>
          </div>
        </section>

        <section className=" rounded-lg">
          <iframe
            className="h-56 max-w-xs rounded-lg"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbardahlchile%2Fvideos%2F657742284664176%2F&show_text=false&width=560&t=0"
            width="400"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </section>
      </section>
    </section>
  )
}
