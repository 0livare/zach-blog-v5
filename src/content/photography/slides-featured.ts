import type {Slide} from '@olivare/react-photo-gallery'

import {_2013} from './slides-2013'
import {_2015} from './slides-2015'
import {_2016} from './slides-2016'

let allSlides = [..._2013, ..._2015, ..._2016]

let byTitle: Record<string, Slide> = allSlides.reduce((accum, currValue) => {
  accum[currValue.title] = currValue
  return accum
}, {})

export const featuredSlides: Slide[] = [
  byTitle['Christmas Light'],
  byTitle['America the Beautiful'],
  byTitle['River Walk'],
  byTitle['Outside Wrigly'],
  byTitle['Blue Dock'],
  byTitle['Streamers'],
  byTitle['Sparklers'],
  byTitle['Jumping in puddles'],
  byTitle['Cold spring'],
  byTitle['Dam splashing water'],
  byTitle['The Misty Veils'],
  byTitle['Ahhhdorable'],
  byTitle['Trees'],
]
