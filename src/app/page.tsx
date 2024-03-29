import { BardahlInChile } from '@/components/bardahl-in-chile'
import Hero from '@/components/hero'
import WhiTheBuy from '@/components/whiTheBuy'
import { BardahlInTheWorld } from '@/components/bardahl-in-the-world'

export default function Home () {
  return (
    <main className="h-full w-full">
      <Hero />
      <BardahlInChile />
      <WhiTheBuy />
      <BardahlInTheWorld />
    </main>
  )
}
