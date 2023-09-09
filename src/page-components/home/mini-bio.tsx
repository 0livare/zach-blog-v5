import type {HtmlHTMLAttributes} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {SectionTitle} from './section-title'

export type MiniBioProps = HtmlHTMLAttributes<HTMLDivElement> & {}

export function MiniBio(props: MiniBioProps) {
  let {className, ...rest} = props

  return (
    <div
      {...rest}
      className={cs(
        'MiniBio',
        'flex justify-between mt-8 md:-mt-28 md:pt-16 lg:pt-0 bg-white',
        'flex flex-col md:flex-row gap-8 md:gap-0',
        className,
      )}
    >
      <div className="flex-grow flex items-center">
        <div className="flex flex-col gap-4 justify-center max-w-3xl mx-auto items-start">
          <SectionTitle>Frontend architect with backend experience</SectionTitle>
          <p className="text-2xl text-navy px-4 max-w-2xl">
            My degree is in Software Engineering, but at my core, I am a problem solver. I love
            puzzles in all forms and I am constantly looking for new challenges.
          </p>
          <p className="text-2xl text-navy px-4 max-w-2xl">
            With 10 years of industry experience, I am dedicated to finding effective solutions to
            complex problems.
          </p>
        </div>
      </div>
      <div className="md:max-w-[50%] lg:max-w-2xl flex-grow leading-[0]">
        <img
          src="/images/home/zach.jpg"
          width={3024}
          height={4032}
          placeholder="blur"
          alt="Zach Olivare"
        />
      </div>
    </div>
  )
}
