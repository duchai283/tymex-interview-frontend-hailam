import InnerLayout from 'components/InnerLayout'
import CharacterFilters from './CharacterFilters'
import CharacterList from './CharacterList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Space } from 'antd'

const CharacterContainer = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get('/api/characters')
        console.log('res', res)
        if (res && res.data) {
          setData(res.data)
        }
      } catch (error) {
        console.log('error', error)
      }
    }

    getCharacters()
  }, [])

  return (
    <InnerLayout className="flex gap-10">
      <CharacterFilters />
      <CharacterList data={data} />
    </InnerLayout>
  )
}

export default CharacterContainer
