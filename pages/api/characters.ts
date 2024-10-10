// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import path from 'path'

type Character = {
  name: string
}

const charactersFilePath = path.join(
  process.cwd(),
  'public/mocks/characters.json'
)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Character[] | { message: string }>
) {
  try {
    const characters = await promises.readFile(charactersFilePath, 'utf-8')
    console.log('characters', characters)

    const json = JSON.parse(characters)

    if (!json.data || !Array.isArray(json.data)) {
      throw new Error('Invalid data structure in characters file')
    }

    res.status(200).json(json.data)
  } catch (error) {
    console.error('Error reading or parsing characters file:', error)
    res.status(404).json({ message: 'No characters found' })
  }
}
