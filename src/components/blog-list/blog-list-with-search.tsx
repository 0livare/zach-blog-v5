import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {useTrieSearch} from '~/hooks'
import {HoverCard} from '../hover-card'
import {SearchInput} from '../search-input'
import {BlogList} from './blog-list'
import {RecipeCard} from '../recipe-card'

type PostBasics = {
  slug: string
  title: string
  description?: string
  date: Date
  heroImage?: string
  tags?: string[]
}

type BlogListWithSearchProps = {
  posts: PostBasics[] | undefined
  postUrlPrefix: string
  alwaysShowCardOverlay?: boolean
  cardType?: 'hover' | 'recipe'
}

export function BlogListWithSearch(props: BlogListWithSearchProps) {
  const {posts, postUrlPrefix, alwaysShowCardOverlay, cardType} = props ?? {}
  const [searchText, setSearchText] = React.useState('')

  const filteredPosts = useTrieSearch({
    searchText,
    searchKeys: ['title', 'description', 'tags'],
    searchItems: posts,
  })

  return (
    <>
      <div className="my-8 flex justify-center text-tbase">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>

      <BlogList>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            {cardType === 'recipe' && (
              <RecipeCard
                to={`${postUrlPrefix}/${post.slug}`}
                src={post.heroImage}
                title={post.title ?? ''}
                className="md:hidden"
              />
            )}
            <HoverCard
              to={`${postUrlPrefix}/${post.slug}`}
              src={post.heroImage}
              title={post.title ?? ''}
              subtitle={post.description}
              alwaysShowOverlay={alwaysShowCardOverlay}
              className={cs(cardType === 'recipe' && 'hidden md:block')}
            />
          </li>
        ))}
      </BlogList>
    </>
  )
}
