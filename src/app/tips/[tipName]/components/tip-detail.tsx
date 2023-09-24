import InformationVideo from '@/presentation/InformationVideo/information-video'
import { type Tip } from '@/types'
import React from 'react'

interface TipDetailProps {
  tip: Tip | undefined
}

const TipDetail: React.FC<TipDetailProps> = ({ tip }) => {
  return (
    <section className="body-font overflow-hidden bg-white text-gray-700">
      <article className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <img
            src={tip?.image}
            alt={tip?.description}
            className=" sticky  top-16 z-40 h-full w-full rounded object-cover object-center lg:w-1/3"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h3 className="text-2xl font-bold lg:text-3xl">{tip?.title}</h3>
            <p className="text-base font-light">{tip?.description}</p>
            <section className="flex flex-col items-start gap-5 lg:max-w-lg lg:gap-6">
              <h3 className="mt-4 text-2xl font-bold">Lista de consejos</h3>

              <ul className="flex flex-col items-start justify-center gap-5">
                {tip?.listOfTips.map((tip) => (
                  <li
                    key={tip.title}
                    className="list-item list-disc font-light leading-9 lg:leading-6"
                  >
                    <span className="font-bold capitalize">{tip.title}:</span>
                    {tip.description}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div>
          <InformationVideo />
        </div>
      </article>
    </section>
  )
}

export default TipDetail
