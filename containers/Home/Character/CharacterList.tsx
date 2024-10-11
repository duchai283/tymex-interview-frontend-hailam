import { ICharacter, ICharacterFilters } from 'interface/character'
import CharacterItem from './CharacterItem'
import { Button, Space } from 'antd'
import { DEFAULT_PER_PAGE } from 'utils/commonUtils'
import { useRouter } from 'next/router'
import { stringify } from 'qs'
import { defaultStringifyOption } from 'utils/commonUtils'
import CharacterSkeleton from 'components/CharacterSkeleton'
import Empty from 'components/Empty'
import CharacterFilterTabs from './CharacterFilterTabs'
import { useRef } from 'react'

interface IProps {
  loading: boolean
  data: ICharacter[]
  filters: ICharacterFilters
}

const CharacterList: React.FC<IProps> = ({ data, loading, filters }) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null)

  const handleViewMore = () => {
    const page = parseInt(router.query.page as string) || 0
    const params = stringify(
      {
        ...router.query,
        perPage: DEFAULT_PER_PAGE,
        page: page + 1,
      },
      defaultStringifyOption
    )
    if (contentRef && contentRef.current) {
      contentRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    router.push(`${router.pathname}?${params}`, undefined, { scroll: false })
  }

  return (
    <div ref={contentRef}>
      <CharacterFilterTabs filters={filters} />
      <h3 className="mb-4 mt-4 text-center md:text-right transition-all">
        {loading ? (
          <div className="items-center flex justify-end">
            <div className="shadow animate-pulse w-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-2" />{' '}
            <div>Items</div>
          </div>
        ) : (
          `${data?.length ? `${data.length} Items` : ''}`
        )}
      </h3>
      <div className="grid justify-center max-h-[800px] md:max-h-none lg:max-w-6xl grid-cols-[repeat(1,280px)] mx-auto md:mt-8 gap-10 sm:gap-x-8 sm:grid-cols-2 md:grid-cols-[repeat(2,_267px)] lg:grid-cols-[repeat(3,_267px)]  sm:mt-12 lg:mt-0 sm:text-left lg:max-h-[1800px] overflow-auto lg:pr-7 mb-14 custom-scrollbar">
        {loading ? (
          <CharacterSkeleton />
        ) : data?.length ? (
          data.map((item, index) => <CharacterItem key={index} item={item} />)
        ) : (
          <div className="col-span-3">
            <Empty />
          </div>
        )}
      </div>
      {data?.length ? (
        <div className="flex items-start justify-center">
          <Button
            disabled={data?.length < DEFAULT_PER_PAGE}
            className="px-24 py-6"
            size="large"
            type="primary"
            onClick={handleViewMore}
            loading={loading}
          >
            View more
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default CharacterList
