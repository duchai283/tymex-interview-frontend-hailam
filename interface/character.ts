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
