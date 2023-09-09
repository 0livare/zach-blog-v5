import type {ComponentProps} from 'react'

import {Title} from '~/components'
import {Layout} from './layout'

export type BlogLayoutProps = ComponentProps<'div'> & {
  title: string
  description?: string
  date?: string
  author?: string
}

export function BlogLayout(props: BlogLayoutProps) {
  let {children, className, title, description, date, author, ...rest} = props

  return (
    <Layout className={className} title={title} {...rest}>
      <div className="relative">
        <LittleCubes />
        <div className="BlogLayout relative pt-24 md:pt-36 pb-32 max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="p-6">
              <Title>{title}</Title>
              {date && (
                <p className="text-sm italic text-right mb-3">
                  {author && `${author} - `}
                  {date}
                </p>
              )}
              {description && (
                <p className="text-xl mt-0 md:w-9/12 text-center mx-auto">{description}</p>
              )}
            </div>
            <div className="mb-12 md:mb-24" />
          </div>
          {children}
        </div>
      </div>
    </Layout>
  )
}

export function LittleCubes() {
  return (
    <div className="absolute top-0 left-0 w-20 md:w-28 lg:w-48 dark:opacity-40 dark:xl:opacity-100 hue-rotate-[58deg] dark:filter-none">
      <img src="/static/images/little-cubes.png" alt="little cubes" width={522} height={1128} />
    </div>
  )
}
