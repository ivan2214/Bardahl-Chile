import { type Tip } from '@/types'
import React from 'react'

interface TipCardProps {
  tip: Tip
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  return (
    <a href={`/tips/${encodeURIComponent(tip.slug)}`}>
      <article className="group relative flex transform flex-col items-center justify-center overflow-hidden text-white duration-150">
        <img
          width="100"
          height="100"
          className="h-full w-full max-w-xs object-cover"
          src={tip.image}
          alt=""
        />

        <div
          className="group-hover:bg-primary peer absolute bottom-6  h-auto transform px-3 py-1 text-sm shadow-2xl
drop-shadow-2xl
 duration-200 ease-linear group-hover:-translate-y-5 group-hover:text-black lg:px-4"
        >
          <span>{tip.title}</span>
        </div>
        <div className="h-1 w-0 transform bg-yellow-500 transition-all duration-700 ease-in-out group-hover:w-full" />
      </article>
    </a>
  )
}

export default TipCard
