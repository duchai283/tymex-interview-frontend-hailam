import React from 'react'
import { CHARACTER_TABS } from 'utils/characterUtils'
import router from 'next/router'
import classNames from 'classnames'

interface IProps {
  onChange: (tab: string) => void
  isLoading: boolean
}
const CharacterTabs: React.FC<IProps> = ({ onChange, isLoading }) => {
  return (
    <div className="tabs mx-auto hidden md:block ">
      <ul className="flex flex-wrap gap-6 p-6 transition-all duration-300 overflow-hidden mx-auto md:mx-0">
        {CHARACTER_TABS.map((item) => (
          <li
            key={item.val}
            className={classNames(
              'bg-gradient-primary-inactive cursor-pointer rounded inline-block py-3 px-6 text-white font-medium tab-active:bg-indigo-600 tab-active:text-white tab-active:rounded-xl active tablink hover:bg-gradient-primary',
              {
                'bg-gradient-primary': (router?.query?.tab || '') === item.val,
                'cursor-not-allowed':
                  isLoading && (router?.query?.tab || '') !== item.val,
              }
            )}
            onClick={() => !isLoading && onChange(item.val)}
            aria-disabled={true}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterTabs
