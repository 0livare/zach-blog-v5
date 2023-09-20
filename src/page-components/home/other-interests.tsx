import type {ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {SectionTitle} from './section-title'
import {PhotoGallery} from './photo-gallery/photo-gallery'

export type OtherInterestsProps = ComponentProps<'div'>

export function OtherInterests(props: OtherInterestsProps) {
  let {className, ...rest} = props

  return (
    <div {...rest} className={cs('OtherInterests', 'p-4 md:p-16 bg-off-white', className)}>
      <SectionTitle className="inline-block">My Other Interests</SectionTitle>

      <Paragraph>
        When I&apos;m not writing code, I enjoy cooking, photography, and spending time with my wife
        Kierstyn and my two dogs, Lola and Fitz. I&apos;m an avid Brewers fan and love venturing
        into the great outdoors whenever possible.
      </Paragraph>

      <Paragraph>
        Also, as you might have guessed from the design of my website, I also enjoy solving Rubik's
        cubes now and again.
      </Paragraph>

      <PhotoGallery />
    </div>
  )
}

function Paragraph(props: any) {
  return <p className="my-8 px-4 text-xl" style={{maxWidth: '75ch'}} {...props} />
}
