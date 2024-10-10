import React from 'react'
import { ICharacter } from 'interface/character'
import { Card, Image } from 'antd'
import { THEME_BY_CHARACTER_TYPE } from 'utils/character'

interface IProps {
  item: ICharacter
}

const CharacterListItem: React.FC<IProps> = ({ item }) => {
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
        },
      }}
      className=" rounded-lg"
    >
      <div
        className={`max-h-60 overflow-hidden rounded mb-6 relative`}
        style={{
          background: `linear-gradient(to right, ${
            THEME_BY_CHARACTER_TYPE[item.type][0]
          }, ${THEME_BY_CHARACTER_TYPE[item.type][1]})`,
        }}
      >
        <div className="absolute top-2 left-2 capitalize px-3 py-1 bg-black bg-opacity-30 text-gray-200 rounded">
          {item.type}
        </div>
        <div className="absolute top-4 right-4 " onClick={markAsFavorite}>
          <Image
            className="cursor-pointer"
            preview={false}
            src="/icons/heart.svg"
            alt="heart-icon"
          />
        </div>
        <img src={item.avatar} alt={item.name} />
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3>{item.name}</h3>
        <div className="flex items-center">
          <Image preview={false} src="/icons/etherum.svg" alt="etherum-icon" />
          <span className="pl-2">{item.price} ETH</span>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={item.seller.avatar}
          alt="Rounded avatar"
        />
        <h3 className="pl-3">{item.seller.name}</h3>
      </div>
    </Card>
  )
}

export default CharacterListItem
