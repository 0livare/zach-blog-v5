import type {ComponentProps} from 'react'
import {Gallery, LightBox, Thumbnail} from '@olivare/react-photo-gallery'

import '@olivare/react-photo-gallery/photoswipe.css'
import '@olivare/react-photo-gallery/default-skin.css'
import '@olivare/react-photo-gallery/thumbnails.css'

import {useMediaQuery} from '~/hooks'
import {featuredSlides} from './photography'

export type OtherInterestsProps = ComponentProps<'div'>

export function PhotoGallery(props: OtherInterestsProps) {
  let {className} = props

  const isMobile = useMediaQuery({is: 'mobile'})

  return (
    <Gallery slides={featuredSlides} className={`mt-16 gap-1 md:gap-2 ${className}`}>
      {featuredSlides.map((slide) => (
        <Thumbnail key={slide.src} slide={slide} aspectRatioMultiplier={isMobile ? 75 : 200} />
      ))}
      <LightBox />
    </Gallery>
  )
}
