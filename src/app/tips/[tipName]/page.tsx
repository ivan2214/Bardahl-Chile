import { consejos } from '@/data/consejos'
import React from 'react'
import TipDetail from './components/tip-detail'
import { type Tip } from '@/types'

interface TipPageDetailProps {
  params: {
    tipName: string
  }
}

const TipPageDetail: React.FC<TipPageDetailProps> = ({ params }) => {
  const { tipName } = params

  const tip: Tip | undefined = consejos?.find((tip) => tip.slug === tipName)

  if (!tip) {
    return null
  }

  return <TipDetail tip={tip} />
}

export default TipPageDetail
