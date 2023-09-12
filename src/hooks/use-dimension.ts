import React from 'react'

let DEFAULT_CONFIG: UseDimensionConfig = {on: true, causeReRenders: true}

/**
 * This hooks lets you monitor any dimension of a DOM element.
 *
 * You give it a ref do a DOM element, a function to extract
 * some value from that element, and some optional config. This hook
 * will then monitor the size of that element and spit out a
 * new value when the size of the DOM element changes.
 */
export function useDimension<E extends Element>(
  domRef: React.RefObject<E>,
  getDimension: (el: E) => number,
  config: UseDimensionConfig = {},
): [number, React.RefObject<number>] {
  let {on, causeReRenders} = {...DEFAULT_CONFIG, ...config}

  let [length, setLength] = React.useState(0)
  let lengthRef = React.useRef(length)

  // Changed from useLayoutEffect for SSR
  React.useEffect(() => {
    let currentLength = getDimension(domRef.current!)
    lengthRef.current = currentLength
    setLength(currentLength)

    if (!on) return

    let ro = new ResizeObserver(() => {
      let el = domRef.current
      if (!el) return
      if (getDimension(el) === lengthRef.current) return

      let currentLength = getDimension(el)
      lengthRef.current = currentLength
      if (causeReRenders) setLength(currentLength)
    })

    ro?.observe(domRef.current!, {})
    return () => ro?.disconnect()
    // Allow getDimension() to be passed as an inline function
    // without extra memoization
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, domRef])

  return [length, lengthRef]
}

export type UseDimensionConfig = {on?: boolean; causeReRenders?: boolean}
