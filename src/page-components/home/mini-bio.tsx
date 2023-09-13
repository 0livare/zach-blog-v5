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
        <div className="flex flex-col gap-4 justify-center max-w-3xl mx-auto items-start md:py-28">
          <SectionTitle>UI architect with fullstack experience, UX Advocate</SectionTitle>
          <p className="text-2xl text-navy px-4 max-w-2xl">
            I am a web UI architect, with a focus on web-accessibility and variety of full-stack
            experience. I have industry leading expertise with React, CSS, and TypeScript. I have
            implemented design systems for three different companies, published more than a dozen
            NPM packages, and made contributions to popular open source libraries. I've taught
            classes on Git, and lead teams of varying shapes and sizes.
          </p>
          <p className="text-2xl text-navy px-4 max-w-2xl">
            I've created applications for the web, desktop, mobile, and embedded devices. I work
            closely with UX designers and build applications that are accessible to everyone. With
            more than 10 years of industry experience, I am dedicated to finding effective solutions
            to complex problems.
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
