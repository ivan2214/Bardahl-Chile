import { productHighlights } from '@/data/jsonInfo.json'

export const BardahlInTheWorld = () => {
  const bardahlWord = productHighlights[0]
  return (
    <section className="mb-10 flex w-full flex-col items-center justify-center gap-10 px-8 lg:py-10">
      <section className="flex max-w-lg flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-6">
          <p className="text-sm font-light">Destaca con nuestros internacionales</p>
          <h3 className="text-4xl font-bold">{bardahlWord.name}</h3>
          <div className="flex justify-center gap-5">
            <p className="border-r-2 border-dashed border-yellow-400 text-sm font-light">
              {bardahlWord.description[0]}
            </p>
            <p className="text-sm font-light">{bardahlWord.description[1]}</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start justify-center gap-10">
        <img
          loading="lazy"
          width="989"
          height="252"
          src={bardahlWord.image}
          alt={bardahlWord.description[0]}
        />
      </section>
    </section>
  )
}
