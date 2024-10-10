export const CHARACTER_TYPE_COMMON = 'common'
export const CHARACTER_TYPE_EPIC = 'epic'
export const CHARACTER_TYPE_RARE = 'rare'
export const CHARACTER_TYPE_LEGENDARY = 'legendary'
export const CHARACTER_TYPE_MYTHIC = 'mythic'

export const THEME_BY_CHARACTER_TYPE: Record<string, string[]> = {
  [CHARACTER_TYPE_COMMON]: ['#46DA87', '#26B8C0'],
  [CHARACTER_TYPE_EPIC]: ['#CF5CFC', '#7864F3'],
  [CHARACTER_TYPE_RARE]: ['#45A1F6', '#576DF3'],
  [CHARACTER_TYPE_LEGENDARY]: ['#FD9C5B', '#F3D563'],
  [CHARACTER_TYPE_MYTHIC]: ['#FD5B63', '#F262C3'],
}
