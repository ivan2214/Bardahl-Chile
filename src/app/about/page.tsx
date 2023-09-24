import TimeLine from '@/presentation/TimeLine/time-line'

import React from 'react'

const AboutPage = () => {
  return (
    <main className="container flex flex-col items-center justify-center gap-x-3 gap-y-5 px-8 py-10">
      <section className="flex  flex-col items-center  gap-5 lg:flex-row lg:items-start ">
        <section className="flex flex-col items-start justify-center gap-4 border-b-2  border-dashed border-primary p-0 lg:border-b-0  lg:border-r-2 lg:pl-5">
          <h2 className="ml-4 text-4xl font-bold">Nuestra Trayectoria</h2>
          <article className="flex max-w-lg flex-col items-start justify-start gap-4 pb-5 lg:pb-0 lg:pr-5">
            <p className="text-sm font-light leading-6">
              Desde nuestra fundación en Bolivia, Bardahl ha sido líder en el
              cuidado y protección de máquinas y motores, brindando soluciones
              innovadoras y de calidad.
            </p>
            <p className="text-sm font-light leading-6">
              Nuestra dedicación a la excelencia nos ha consolidado como líderes
              en Bolivia. Ofrecemos soluciones confiables que protegen y
              optimizan el rendimiento de tus equipos.
            </p>
          </article>
        </section>

        <section className="flex flex-col items-start justify-center gap-4 ">
          <h2 className="ml-4 text-4xl font-bold">Nuestro Legado</h2>
          <article className="flex max-w-lg flex-col items-start justify-start gap-4">
            <p className="text-sm font-light leading-6">
              Nuestro legado en Bolivia se basa en la confianza, calidad y
              excelencia. Los productos Bardahl son reconocidos por su
              protección y rendimiento excepcional.
            </p>
            <span className="text-sm font-medium leading-6 text-zinc-800">
              ¡Gracias por ser parte de la historia de Bardahl en Bolivia, donde
              cuidamos y protegemos tus máquinas y motores!
            </span>
          </article>
        </section>
      </section>

      <section className="container mt-5">
        <h2 className="mb-5 text-4xl font-bold">Nuestros linea de tiempo</h2>
        <TimeLine />
      </section>
    </main>
  )
}

export default AboutPage
