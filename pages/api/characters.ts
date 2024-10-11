import { promises } from 'fs'
import { ICharacter } from 'interface/character'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { PRICE_LOW_TO_HIGH } from 'utils/characterUtils'
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from 'utils/commonUtils'

const charactersFilePath = path.join(
  process.cwd(),
  'public/mocks/characters.json'
)

const randomData = (data: any, perPage: number) => {
  const selectedIndexes = new Set() // To keep track of already selected indexes
  const output = []
  for (let i = 0; i < perPage; i++) {
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * data.length)
    } while (selectedIndexes.has(randomIndex))
    selectedIndexes.add(randomIndex)
    const price = (Math.random() * 200).toFixed(2)
    output[i] = data[randomIndex]
    output[i].price = price
    output[i].seller.verified = Math.random() >= 0.5
  }
  return output
}
const buildDataByPage = (data: any, page: number, perPage: number) => {
  let output: any = []
  console.log('data.length', data.length)
  for (let i = 0; i <= page; i++) {
    output = [...output, ...randomData(data, perPage)]
  }
  return output
}

function containsPattern(name: string, pattern: string) {
  const regex = new RegExp(pattern, 'i') // 'i' for case-insensitive match
  return regex.test(name)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICharacter[] | { message: string }>
) {
  try {
    const characters = await promises.readFile(charactersFilePath, 'utf-8')
    const query = req.query
    const page = query.page as string
    const perPage = query.perPage as string
    const name = query.name as string
    const tier = query.tier as string
    const theme = query.theme as string
    const priceRange = query.priceRange as string[]
    const priceOrder = query.priceOrder as string
    const tab = query.tab as string
    const json = JSON.parse(characters)
    if (!json.data || !Array.isArray(json.data)) {
      throw new Error('Invalid data structure in characters file')
    }
    let data = buildDataByPage(
      json.data,
      parseInt(page) || DEFAULT_PAGE,
      parseInt(perPage) || DEFAULT_PER_PAGE
    )
    if (name) {
      data = data.filter((item: ICharacter) => containsPattern(item.name, name))
    }
    if (tier) {
      data = data.filter((item: ICharacter) => item.type === tier)
    }
    if (tab) {
      data = data.filter((item: ICharacter) => item.type === tab)
    }
    if (theme) {
      data = data.filter((item: ICharacter) => item.theme === theme)
    }

    if (priceOrder) {
      if (priceOrder === PRICE_LOW_TO_HIGH) {
        data = data?.sort((a: ICharacter, b: ICharacter) => a.price - b.price)
      } else {
        data = data?.sort((a: ICharacter, b: ICharacter) => b.price - a.price)
      }
    }
    if (priceRange && priceRange.length) {
      const fromPrice = parseInt(priceRange[0])
      const toPrice = parseInt(priceRange[1])
      data = data.filter(
        (item: ICharacter) => item.price >= fromPrice && item.price <= toPrice
      )
    }
    if (page) {
      setTimeout(() => {
        res.status(200).json(data)
      }, 2000)
    } else {
      res.status(200).json(data)
    }
  } catch (error) {
    console.error('Error reading or parsing characters file:', error)
    res.status(404).json({ message: 'No characters found' })
  }
}
