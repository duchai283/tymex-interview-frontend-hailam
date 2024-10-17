import { ICharacter } from 'interface/character'
import CharacterItem from './CharacterItem'
import { Button } from 'antd'
import { DEFAULT_PER_PAGE } from 'utils/commonUtils'
import { useRouter } from 'next/router'
import { stringify } from 'qs'
import { defaultStringifyOption } from 'utils/commonUtils'
import CharacterSkeleton from 'components/CharacterSkeleton'
import Empty from 'components/Empty'
import CharacterTabs from './CharacterTabs'
import { useRef } from 'react'

interface IProps {
  data: ICharacter[]
  isLoading: boolean
}

const CharacterList: React.FC<IProps> = ({ data, isLoading }) => {
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
    router.push(`${router.pathname}?${params}`, undefined, { scroll: false })
    if (contentRef && contentRef.current) {
      contentRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  const onChangeTab = (tab: string) => {
    const params = stringify(
      {
        ...router.query,
        tab,
      },
      defaultStringifyOption
    )
    router.push(`${router.pathname}?${params}`, undefined, { scroll: false })
  }

  return (
    <div ref={contentRef}>
      <CharacterTabs onChange={onChangeTab} isLoading={isLoading} />
      <h3 className="mx:auto mb-4 mt-4 text-center md:text-right transition-all">
        {isLoading ? (
          <div className="items-center flex justify-center md:justify-end">
            <div className="shadow animate-pulse w-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-2" />{' '}
            <div>Items</div>
          </div>
        ) : (
          `${data?.length ? `${data.length} Items` : ''}`
        )}
      </h3>
      <div className="grid justify-center max-h-[800px] md:max-h-none lg:max-w-6xl grid-cols-[repeat(1,280px)] mx-auto md:mt-8 gap-10 sm:gap-x-8 sm:grid-cols-2 md:grid-cols-[repeat(2,_267px)] lg:grid-cols-[repeat(3,_267px)]  sm:mt-12 lg:mt-0 sm:text-left lg:max-h-[1800px] overflow-auto lg:pr-7 mb-14 custom-scrollbar">
        {isLoading ? (
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
            role="viewmorebtn"
            disabled={data?.length < DEFAULT_PER_PAGE}
            className="px-24 py-6"
            size="large"
            type="primary"
            onClick={handleViewMore}
            loading={isLoading}
          >
            View more
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default CharacterList
