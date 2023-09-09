import React, {useContext} from 'react'

export type OverflowCarouselContextShape = {
  childWidth: number
}

export const OverflowCarouselContext = React.createContext<OverflowCarouselContextShape>({
  childWidth: 200,
})

export function useOverflowCarouselContext() {
  return useContext(OverflowCarouselContext)
}
