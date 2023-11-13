import React from 'react'

const MOBILE_WIDTH = 768

/** Default: False (desktop) */
export function useIsMobile() {
  const [width, setWidth] = React.useState(Number.POSITIVE_INFINITY)

  React.useEffect(() => {
    new ResizeObserver(() => {
      setWidth(document.body.offsetWidth)
    }).observe(document.body)
  }, [])

  return width < MOBILE_WIDTH
}
