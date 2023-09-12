import React from 'react'
import TrieSearch from 'trie-search'

import {useDebounce} from '~/hooks'

export function useTrieSearch<T>(args: {
  searchText: string
  searchKeys: Array<keyof T>
  searchItems: T[]
}): T[] {
  const {searchText, searchKeys, searchItems} = args

  const debouncedSearchText = useDebounce(searchText)
  const trieRef = React.useRef<any>()

  React.useEffect(() => {
    const trie = new TrieSearch(searchKeys as string[])
    trie.addAll(searchItems)
    trieRef.current = trie
  }, [])

  return debouncedSearchText ? trieRef.current.search(debouncedSearchText) : searchItems
}
