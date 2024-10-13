import React from 'react'
import { ICharacterFilters, ICharacterTabs } from 'interface/character'
import { useRouter } from 'next/router'
import { stringify } from 'qs'
import { CHARACTER_TABS } from 'utils/characterUtils'
import { defaultStringifyOption } from 'utils/commonUtils'

interface IProps {
  filters: ICharacterFilters
}
const CharacterTabs: React.FC<IProps> = ({ filters }) => {
  const router = useRouter()

  const handleChangeTab = (tab: ICharacterTabs) => {
    const params = stringify(
      {
        ...router.query,
        tab: tab.val,
      },
      defaultStringifyOption
    )
    router.push(`${router.pathname}?${params}`, undefined, { scroll: false })
  }

  return (
    <div className="tabs mx-auto hidden md:block ">
      <ul className="flex flex-wrap gap-6 p-6 transition-all duration-300 overflow-hidden mx-auto md:mx-0">
        {CHARACTER_TABS.map((item) => (
          <li
            key={item.val}
            className={`cursor-pointer ${
              filters?.tab === item.val
                ? 'bg-gradient-primary'
                : 'bg-gradient-primary-inactive'
            } rounded`}
            onClick={() => handleChangeTab(item)}
          >
            <div className="inline-block py-3 px-6 text-white  font-medium  tab-active:bg-indigo-600 tab-active:text-white tab-active:rounded-xl active tablink">
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterTabs
