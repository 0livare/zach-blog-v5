import {useState, useEffect} from 'react'

export const breakpointMapping = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number

export type UseMediaQueryOptions =
  | string
  | {
      above?: Breakpoint
      below?: Breakpoint
      is?: 'mobile' | 'desktop'
    }

export function useMediaQuery(query: UseMediaQueryOptions, {on = true} = {}) {
  const [matches, setMatches] = useState(false)

  // Changed from useLayoutEffect for SSR
  useEffect(() => {
    function update(ev: MediaQueryList | MediaQueryListEvent) {
      setMatches(ev.matches)
    }

    const mediaQueryString = queryObjectToString(query)
    const mql = window.matchMedia(mediaQueryString)

    update(mql)

    if (!on) return
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [on, query])

  return matches
}

export function queryObjectToString(query: UseMediaQueryOptions) {
  if (typeof query === 'string') return query

  if (query.is === 'mobile') {
    query = {below: 'md'}
  } else if (query.is === 'desktop') {
    query = {above: 'lg'}
  }

  let queryStr = ''

  if (query.above) {
    const aboveStr = breakpointToPx(query.above)
    queryStr += `(min-width: ${aboveStr}px)`

    if (query.below) queryStr += ' and '
  }

  if (query.below) {
    const belowStr = breakpointToPx(query.below)
    queryStr += `(max-width: ${belowStr}px)`
  }

  return queryStr
}

function breakpointToPx(breakpoint: Breakpoint) {
  if (typeof breakpoint === 'number') return breakpoint
  return breakpointMapping[breakpoint]
}
