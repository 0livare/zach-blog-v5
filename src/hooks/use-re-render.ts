import {useState, useCallback} from 'react'

export function useReRender() {
  const [, setBool] = useState(false)

  const reRender = useCallback(() => {
    setBool((bool) => !bool)
  }, [])

  return reRender
}
