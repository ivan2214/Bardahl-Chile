import TimeLine from '@/presentation/TimeLine/time-line'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-3 px-8 py-10">
      <section className="flex flex-col items-center gap-5 lg:items-start">
        <h2 className="text-4xl font-bold">Nuestra Historia</h2>
        <section className="flex flex-col items-start justify-center gap-4 lg:flex-row">
          <article className="border-primary flex max-w-lg flex-col items-start justify-start gap-4 border-dashed p-0 lg:border-r-2 lg:pl-5">
            <p className="text-sm font-light leading-6">
              Desde nuestra fundación en Bolivia, Bardahl se ha destacado como
              líder en el cuidado y protección de máquinas y motores. Nos hemos
              comprometido a ofrecer soluciones innovadoras y de calidad que
              brindan rendimiento superior a los vehículos y maquinarias.
            </p>
            <p className="text-sm font-light leading-6">
              Comenzamos nuestra historia con una visión clara: ofrecer
              soluciones innovadoras y de calidad que brinden protección y
              rendimiento superior. A lo largo de los años, hemos trabajado
              incansablemente para cumplir y superar esa visión, convirtiéndonos
              en referentes en el mercado boliviano.
            </p>
          </article>
          <article className="flex max-w-lg flex-col items-start justify-start gap-4">
            <p className="text-sm font-light leading-6">
              Gracias a nuestra dedicación constante a la excelencia, nos hemos
              consolidado como líderes en Bolivia. Nuestro compromiso con la
              investigación y desarrollo nos ha permitido estar a la vanguardia
              de la tecnología, desarrollando productos de última generación que
              marcan la diferencia en el cuidado automotriz e industrial.
            </p>
            <p className="text-sm font-light leading-6">
              En Bardahl, nos enorgullece brindar soluciones confiables y
              efectivas que protegen y optimizan el rendimiento de tus equipos.
              Nuestro equipo experto está siempre dispuesto a brindarte el mejor
              asesoramiento y soporte técnico para satisfacer tus necesidades.
            </p>
          </article>
        </section>
      </section>
      <section className="flex flex-col items-center gap-5 lg:items-end">
        <h2 className="text-4xl font-bold">Nuestro Legado</h2>
        <section className="flex flex-col items-start justify-center gap-4 lg:flex-row-reverse">
          <article className="flex max-w-lg flex-col items-start justify-start gap-4">
            <p className="text-sm font-light leading-6">
              Nuestro legado en Bolivia se basa en la confianza, calidad y
              excelencia. Nuestros productos son reconocidos por su protección y
              rendimiento excepcional. Como socios confiables, brindamos
              asesoramiento técnico y soluciones personalizadas para el cuidado
              de máquinas y motores. Miramos hacia el futuro con determinación,
              comprometidos a liderar el mercado y satisfacer los desafíos
              cambiantes de la industria.
            </p>
          </article>
          <article className="border-primary flex max-w-lg flex-col items-start justify-start gap-4 border-dashed p-0 lg:border-r-2 lg:pr-5">
            <span className="text-sm font-medium leading-6 text-zinc-800">
              ¡Gracias por ser parte de la historia de Bardahl en Bolivia, donde
              cuidamos y protegemos tus máquinas y motores!
            </span>
          </article>
        </section>
      </section>
      <TimeLine />
    </main>
  )
}

export default AboutPage
