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
import { FloatButton } from 'antd'

const defaultFilters: ICharacterFilters = {
  page: DEFAULT_PAGE,
  perPage: DEFAULT_PER_PAGE,
  tab: '',
}

const CharacterContainer = () => {
  const router = useRouter()
  const [data, setData] = useState<ICharacter[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filters, setFilters] = useState<ICharacterFilters>({})

  const getCharacters = async (filters: ICharacterFilters) => {
    setLoading(true)
    try {
      const params = stringify({ ...filters }, defaultStringifyOption)
      const res = await axios.get(`/api/characters?${params}`)
      if (res && res.data) {
        setData(res.data)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
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
    setFilters(tmpFilters)
  }, [router.query])

  return (
    <InnerLayout>
      <div className="block md:flex justify-center flex-wrap gap-10">
        <CharacterFilters filters={filters} />
        <CharacterList data={data} loading={loading} filters={filters} />
      </div>
      <FloatButton.BackTop />
    </InnerLayout>
  )
}

export default CharacterContainer
