'use client'
import React from 'react'
import { Quote } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { type Reviews } from '@/types'

interface Props {
  opinion: Reviews
  indice: number
}

function CardOpinion ({ opinion, indice }: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1
  })

  return (
    <article
      ref={ref}
      className={`relative flex max-w-md flex-col items-start gap-5 bg-white px-8 py-5 drop-shadow-lg ${
        indice > 0 && indice < 2 && 'lg:ml-48'
      }  ${indice === 2 && 'lg:ml-16'}  rounded-lg hover:shadow-2xl ${
        inView ? 'animate-fade-up-delayed' : 'opacity-0'
      } `}
    >
      <Quote size={15} />
      <section className="flex items-center justify-end gap-3">
        <p className="text-xs font-light">{opinion.comment}</p>
        <div className="rounded-full">
          <img
            loading="lazy"
            width="100"
            height="100"
            src={opinion.src}
            alt={opinion.comment}
          />
        </div>
      </section>
      <span className="font-bold">{opinion.name}</span>
    </article>
  )
}

export default CardOpinion
