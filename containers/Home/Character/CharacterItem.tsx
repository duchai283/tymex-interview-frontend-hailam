import React from 'react'
import { ICharacter } from 'interface/character'
import { Card, Image } from 'antd'
import { THEME_BY_CHARACTER_TYPE } from 'utils/characterUtils'

interface IProps {
  item: ICharacter
}

const CharacterItem: React.FC<IProps> = ({ item }) => {
  const markAsFavorite = () => {
    // Mark As Favoriate Function
  }

  return (
    <Card
      bordered={false}
      loading={false}
      styles={{
        body: {
          padding: 16,
          background: '#282835',
          color: '#fff',
          borderRadius: 10,
        },
      }}
      className="rounded-[10px] transition-opacity duration-500 ease-in-out"
    >
      <div
        className={`max-h-60 max-w-[267px] overflow-hidden rounded mb-6 relative`}
        style={{
          background: `linear-gradient(to right, ${
            THEME_BY_CHARACTER_TYPE[item?.type]?.[0]
          }, ${THEME_BY_CHARACTER_TYPE[item?.type]?.[1]})`,
        }}
      >
        <div className="absolute top-2 left-2 capitalize px-3 py-1 bg-black bg-opacity-30 text-gray-200 rounded">
          {item?.type}
        </div>
        <div className="absolute top-4 right-4 " onClick={markAsFavorite}>
          <Image
            className="cursor-pointer"
            preview={false}
            src="/icons/heart.svg"
            alt="heart-icon"
          />
        </div>
        <img src={item?.avatar} alt={item?.name} />
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3>{item?.name}</h3>
        <div className="flex items-center">
          <Image preview={false} src="/icons/etherum.svg" alt="etherum-icon" />
          <span className="pl-2">{item?.price} ETH</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full"
            src={item?.seller?.avatar}
            alt="Rounded avatar"
          />

          <div className="absolute right-0 bottom-[-6px]">
            {item?.seller?.verified ? (
              <Image preview={false} src="/icons/verified.svg" />
            ) : (
              <Image preview={false} src="/icons/unverified.svg" />
            )}
          </div>
        </div>
        <h3 className="pl-3 text-xs">{item?.seller?.name}</h3>
      </div>
    </Card>
  )
}

export default CharacterItem
