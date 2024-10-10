import { ICharacter } from 'interface/character'
import CharacterListItem from './CharacterListItem'

interface IProps {
  data: ICharacter[]
}

const CharacterList: React.FC<IProps> = ({ data }) => {
  return (
    <div className="grid min-w-[270px] lg:max-w-6xl grid-cols-1 mx-auto mt-8 gap-10 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left max-h-[1800px] overflow-auto pr-7 custom-scrollbar">
      {data?.length &&
        data.map((item, index) => (
          <CharacterListItem key={index} item={item} />
        ))}
    </div>
  )
}

export default CharacterList
