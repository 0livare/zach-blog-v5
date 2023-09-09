import type {ComponentProps} from 'react'
import {Gallery, LightBox, Thumbnail} from '@olivare/react-photo-gallery'
import {twMerge as cs} from 'tailwind-merge'

import '@olivare/react-photo-gallery/photoswipe.css'
import '@olivare/react-photo-gallery/default-skin.css'
import '@olivare/react-photo-gallery/thumbnails.css'

import {featuredSlides} from '~/content/photography'
import {useMediaQuery} from '~/hooks'
import {SectionTitle} from './section-title'

export type OtherInterestsProps = ComponentProps<'div'>

export function OtherInterests(props: OtherInterestsProps) {
  let {className, ...rest} = props

  const isMobile = useMediaQuery({is: 'mobile'})

  return (
    <div {...rest} className={cs('OtherInterests', 'p-4 md:p-16 bg-off-white', className)}>
      <SectionTitle className="inline-block">My Other Interests</SectionTitle>

      <Paragraph>
        When I&apos;m not writing code, I enjoy cooking, photography, and spending time with my
        fiancé Kierstyn and my two dogs, Lola and Fitz. I&apos;m an avid Brewers fan and love
        venturing into the great outdoors whenever possible.
      </Paragraph>

      <Paragraph>
        Also, as you might have guessed from my website, I also enjoy solving Rubik&apos;s cubes! I
        have cubes as small as a 2x2 and as large as a 7x7, but my favorite is still the good
        &apos;ol 3x3.
      </Paragraph>

      <Gallery slides={featuredSlides} className="mt-16 gap-1 md:gap-2">
        {featuredSlides.map((slide) => (
          <Thumbnail key={slide.src} slide={slide} aspectRatioMultiplier={isMobile ? 75 : 200} />
        ))}
        <LightBox />
      </Gallery>
    </div>
  )
}

function Paragraph(props: any) {
  return <p className="my-8 px-4 text-xl" style={{maxWidth: '75ch'}} {...props} />
}
