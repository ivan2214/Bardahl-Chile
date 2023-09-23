export interface Route {
  href: string
  label: string
  active: boolean
}

export interface Reviews {
  name: string
  comment: string
  src: string
}

export interface Product {
  id: number
  name: string
  url: string
  descripcion: string
  whyUseIt: string
  benefic: string
  instrucctions: string
  benefitsAndlitersToTreat?: BenefitsAndlitersToTreat
  prestaciones?: string
  categoria?: string
  category?: string
}

interface BenefitsAndlitersToTreat {
  'inye-110': string
  'inye-250': string
  'inye-500': string
  more: string
}
