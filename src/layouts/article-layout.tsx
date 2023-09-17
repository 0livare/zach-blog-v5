import React from 'react'

import {Title} from '~/components'
import {HeroImage} from '~/page-components'
import {Layout} from './layout'
import {twMerge as cs} from 'tailwind-merge'
import {FormattedDate} from '~/components'

export type ArticleLayoutProps = React.ComponentProps<'div'> & {
  title: string
  description?: string
  date?: Date
  author?: string
  heroImageSrc?: any
}

export function ArticleLayout(props: ArticleLayoutProps) {
  let {children, className, title, description, date, author, heroImageSrc, ...rest} = props

  return (
    <Layout
      className={cs('BlogLayout pt-24 md:pt-36 pb-32 max-w-5xl mx-auto', className)}
      {...rest}
    >
      <div className="max-w-2xl mx-auto">
        <div className="p-6">
          <Title>{title}</Title>
          {date && (
            <p className="text-sm italic text-right mb-3">
              {author && `${author} -- `}
              <FormattedDate date={date} />
            </p>
          )}
          {description && (
            <p className="text-xl mt-0 md:w-9/12 text-center mx-auto">{description}</p>
          )}
        </div>

        {heroImageSrc && <HeroImage src={heroImageSrc} />}

        <div className="mb-12 md:mb-24" />
      </div>

      <article>{children}</article>
    </Layout>
  )
}
