import React from 'react'
import { whyBuyBardahl, opinions } from '@/data/jsonInfo.json'
import { Button } from './ui/button'
import CardOpinion from './CardOpinion'
import Link from 'next/link'

const whiTheBuy = () => {
  return (
    <section className="flex w-full flex-col justify-center gap-10 px-8 py-10 lg:flex-row">
      <section className="flex max-w-lg flex-col items-start gap-10">
        <div>
          <p className="text-sm font-light">Destaca con nuestra mercancía</p>
          <h3 className="text-4xl font-bold">{whyBuyBardahl.title}</h3>
        </div>

        <ul className="flex flex-col items-start justify-center gap-5">
          {whyBuyBardahl.reasons.slice(0, 5).map((reason) => (
            <li key={reason} className="list-item list-disc font-light">{reason}</li>
          ))}
        </ul>

        <Button>
          <Link href="/products">Ver más</Link>
        </Button>
      </section>

      <section className="flex flex-col items-start justify-center gap-10">
        {opinions?.reviews?.slice(0, 3).map((op, indx) => {
          return <CardOpinion key={indx} opinion={op} indice={indx} />
        })}
      </section>
    </section>
  )
}

export default whiTheBuy
