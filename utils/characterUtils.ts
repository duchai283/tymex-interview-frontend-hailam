import { ICharacterTabs } from 'interface/character'

export const CHARACTER_TYPE_COMMON = 'common'
export const CHARACTER_TYPE_EPIC = 'epic'
export const CHARACTER_TYPE_RARE = 'rare'
export const CHARACTER_TYPE_LEGENDARY = 'legendary'
export const CHARACTER_TYPE_MYTHIC = 'mythic'

export const CHARACTER_THEME_COMMON = 'flower_garden'
export const CHARACTER_THEME_EPIC = 'starry_sky'
export const CHARACTER_THEME_RARE = 'cloudy_morning'
export const CHARACTER_THEME_LEGENDARY = 'halloween'
export const CHARACTER_THEME_MYTHIC = 'rainbow_dreams'

export const PRICE_LOW_TO_HIGH = 'price_low_to_high'
export const PRICE_HIGH_TO_LOW = 'price_high_to_low'

export const SELECT_THEME_OPTIONS: Record<string, string> = {
  [CHARACTER_THEME_COMMON]: 'Flower Garden',
  [CHARACTER_THEME_EPIC]: 'Starry Sky',
  [CHARACTER_THEME_RARE]: 'Cloudy Morning',
  [CHARACTER_THEME_LEGENDARY]: 'Halloween',
  [CHARACTER_THEME_MYTHIC]: 'Rainbow Dreams',
}

export const THEME_BY_CHARACTER_TYPE: Record<string, string[]> = {
  [CHARACTER_TYPE_COMMON]: ['#46DA87', '#26B8C0'],
  [CHARACTER_TYPE_EPIC]: ['#CF5CFC', '#7864F3'],
  [CHARACTER_TYPE_RARE]: ['#45A1F6', '#576DF3'],
  [CHARACTER_TYPE_LEGENDARY]: ['#FD9C5B', '#F3D563'],
  [CHARACTER_TYPE_MYTHIC]: ['#FD5B63', '#F262C3'],
}

export const SELECT_TIER_OPTIONS: Record<string, string> = {
  [CHARACTER_TYPE_COMMON]: 'Common',
  [CHARACTER_TYPE_EPIC]: 'Epic',
  [CHARACTER_TYPE_RARE]: 'Rare',
  [CHARACTER_TYPE_LEGENDARY]: 'Legendary',
  [CHARACTER_TYPE_MYTHIC]: 'Mythic',
}

export const SELECT_PRICE_ORDER_OPTIONS: Record<string, string> = {
  [PRICE_LOW_TO_HIGH]: 'Low to high',
  [PRICE_HIGH_TO_LOW]: 'High to low',
}

export const CHARACTER_TABS: ICharacterTabs[] = [
  { val: '', label: 'All' },
  { val: 'legendary', label: 'Legendary' },
  { val: 'mythic', label: 'Mythic' },
  { val: 'epic', label: 'Epic' },
  { val: 'rare', label: 'Rare' },
  { val: 'common', label: 'common' },
]
