import React from 'react'
import TrieSearch from 'trie-search'

import {useDebounce} from '~/hooks'

export function useTrieSearch<T>(args: {
  searchText: string
  searchKeys: Array<keyof T>
  searchItems: T[] | undefined
}): T[] {
  const {searchText, searchKeys, searchItems} = args

  const debouncedSearchText = useDebounce(searchText)
  const trieRef = React.useRef<any>()

  React.useEffect(() => {
    if (searchItems == null) return
    const trie = new TrieSearch(searchKeys as string[])
    trie.addAll(searchItems)
    trieRef.current = trie
  }, [searchItems == null])

  return debouncedSearchText ? trieRef.current.search(debouncedSearchText) : searchItems
}
