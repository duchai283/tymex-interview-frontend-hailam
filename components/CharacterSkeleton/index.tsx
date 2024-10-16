import Skeleton from 'components/Skeleton'

const CharacterSkeleton = ({}) => {
  return Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
}

export default CharacterSkeleton
