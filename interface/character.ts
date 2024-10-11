export interface ICharacter {
  name: string
  theme: string
  time: string
  price: number
  avatar: string
  type: string
  seller: {
    name: string
    avatar: string
    verified: boolean
  }
}

export interface ICharacterFilters {
  page?: number
  perPage?: number
  orderBy?: string
  name?: string
  status?: boolean
  tier?: string
  priceOrder?: string
  theme?: string
  priceRange?: number[]
  tab?: string
}

export interface ICharacterTabs {
  val: string
  label: string
}
