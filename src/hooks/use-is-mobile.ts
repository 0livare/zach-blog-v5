import React from 'react'

const MOBILE_WIDTH = 768

export function useIsMobile() {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    new ResizeObserver(() => {
      setWidth(document.body.offsetWidth)
    }).observe(document.body)
  }, [])

  return width < MOBILE_WIDTH
}
