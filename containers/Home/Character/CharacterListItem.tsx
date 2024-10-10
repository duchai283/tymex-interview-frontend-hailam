import React from 'react'
import { ICharacter } from 'interface/character'

interface IProps {
  item: ICharacter
}

const CharacterListItem: React.FC<IProps> = ({ item }) => {
  console.log('item', item)
  return (
    <div className="w-full max-w-[267px] h-full border border-red-700 bg-red-600">
      Hello
      {/* <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">The DJ</h3>
        <span className="badge bg-purple-500 text-xs px-2 py-1 rounded">
          Epic
        </span>
      </div>
      <div className="flex justify-center items-center mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="The DJ"
          className="rounded-lg w-full"
        />
      </div>
      <div className="flex justify-between text-sm">
        <p>2.75 ETH</p>
        <p>@Ghozali_Ghozalu</p>
      </div> */}
    </div>
  )
}

export default CharacterListItem
