import React from 'react'
import Container from './ui/container'
import Heading from './ui/heading'
import Link from 'next/link'
import { Button } from './ui/button'

export function BardahlInChile () {
  return (
    <Container className="py-4 lg:my-5 lg:py-10">
      <section className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:items-start lg:px-8">
        <section className="flex flex-col items-start gap-10 lg:flex-row">
          <section className="10 lg:border-bar flex max-w-xs flex-col items-start justify-center gap-3 border-dashed lg:border-r-2 lg:pl-5">
            <div className="flex flex-col items-start justify-center gap-2">
              <img width="30" height="40" src="flag-chile.png" />
              <Heading title="Bardahl en Chile" />
            </div>
            <div className="flex max-w-xs flex-col items-start justify-center gap-6">
              <h3 className="text-lg font-normal">
                Protección confiable para tus máquinas y motores
              </h3>
              <p className="max-w-xs text-sm font-light leading-7">
                Bardahl ha sido el referente en el cuidado y protección de
                máquinas y motores en Chile. Nuestros productos innovadores y
                de calidad superior están diseñados para garantizar el
                rendimiento óptimo de tus vehículos y maquinarias.
              </p>
              <Button>
                <Link href="/about">Leer sobre Bardahl</Link>
              </Button>
            </div>
          </section>
          <div className="max-w-xs">
            <p className="max-w-xs text-sm font-light leading-7">
              Con un compromiso inquebrantable con el servicio al cliente,
              nuestro equipo experto está listo para brindarte asesoramiento
              técnico y resolver tus consultas. Confía en Bardahl para proteger
              tu inversión y disfrutar de un funcionamiento suave y eficiente.
            </p>
          </div>
        </section>

        <section className="max-w-xs rounded-lg">
          <iframe
            className="h-56 max-w-xs rounded-lg"
            src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2FbardahlChile%2Fvideos%2F458576711178108%2F&show_text=false&width=560&t=0"
            width="400"
            style={{
              border: 'none',
              overflow: 'hidden'
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </section>
      </section>
    </Container>
  )
}
