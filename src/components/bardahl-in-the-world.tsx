import { productHighlights } from '@/data/jsonInfo.json'

export const BardahlInTheWorld = () => {
  const bardahlWord = productHighlights[0]
  return (
    <section className="flex h-full w-full flex-col  items-center gap-y-10 p-10 lg:flex-row lg:justify-between lg:gap-x-10">
      <section className="h-full w-full  lg:w-1/2">
        <div className="flex w-full flex-col items-start gap-6">
          <p className="text-sm font-light">
            Destaca con nuestros internacionales
          </p>
          <h3 className="text-4xl font-bold">{bardahlWord?.name}</h3>
          <div className="flex flex-col justify-center  gap-5 lg:flex-row">
            <p className="border-b-2 border-dashed border-yellow-400 pb-5 text-sm font-light lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-2">
              {bardahlWord?.description[0]}
            </p>
            <p className="text-sm font-light">{bardahlWord?.description[1]}</p>
          </div>
        </div>
      </section>

      <section className="h-full w-full  lg:w-1/2">
        <img
          className="h-full  w-full rounded-lg p-10 shadow drop-shadow-lg hover:shadow-2xl"
          loading="lazy"
          src={bardahlWord?.image}
          alt={bardahlWord?.description[0]}
        />
      </section>
    </section>
  )
}
