import InnerLayout from 'components/InnerLayout'
import CharacterFilters from './CharacterFilters'
import CharacterList from './CharacterList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ICharacter, ICharacterFilters } from 'interface/character'
import {
  DATA_REFRESH_INTERVAL_MS,
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
} from 'utils/commonUtils'
import { get, isEmpty } from 'lodash'
import { defaultStringifyOption } from 'utils/commonUtils'
import { stringify } from 'qs'
import { useRouter } from 'next/router'

const defaultFilters: ICharacterFilters = {
  page: DEFAULT_PAGE,
  perPage: DEFAULT_PER_PAGE,
}

const CharacterContainer = () => {
  const router = useRouter()
  const [data, setData] = useState<ICharacter[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [filters, setFilters] = useState<ICharacterFilters>({})

  useEffect(() => {
    const getCharacters = async (filters: ICharacterFilters) => {
      setIsLoading(true)
      try {
        const params = stringify({ ...filters }, defaultStringifyOption)
        const res = await axios.get(`/api/characters?${params}`)
        if (res && res.data) {
          setData(res.data)
        }
      } catch (error) {
        console.log('error', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (!isEmpty(filters)) {
      getCharacters(filters)
    }

    const interval = setInterval(() => {
      getCharacters(filters)
    }, DATA_REFRESH_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [filters])

  useEffect(() => {
    let tmpFilters: ICharacterFilters = {}

    if (!isEmpty(router.query)) {
      const page = parseInt(get(router, 'query.page', DEFAULT_PAGE) as string)
      tmpFilters = { ...router.query, page }
    } else {
      tmpFilters = { ...defaultFilters }
    }

    if (JSON.stringify(tmpFilters) !== JSON.stringify(filters)) {
      setFilters(tmpFilters)
    }
  }, [router.query, filters])

  return (
    <InnerLayout>
      <div className="block md:flex justify-center flex-wrap gap-10">
        <CharacterFilters filters={filters} />
        <CharacterList data={data} isLoading={isLoading} />
      </div>
    </InnerLayout>
  )
}

export default CharacterContainer
