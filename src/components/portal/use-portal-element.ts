import React from 'react'

/**
 * Create an element at the end of the HTML body. Only once instance
 * of this element will be created, regardless of how many times this
 * hook is invoked.
 *
 * Note: Changes to all arguments to this hook will be ignored.
 */
export function usePortalElement(args: {
  id: string
  style?: React.CSSProperties
  removeWhenNoChildren?: boolean
}) {
  const { id, style, removeWhenNoChildren } = args
  const [portalEl, setPortalEl] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    const selector = '#' + id
    let portalEl = document.querySelector(selector) as HTMLElement
    if (!portalEl) {
      portalEl = document.createElement('div')
      portalEl.setAttribute('id', id)

      if (style) {
        for (let styleKey in style) {
          // @ts-ignore
          portalEl.style[styleKey] = style[styleKey]
        }
      }

      document.body.append(portalEl)
    }
    setPortalEl(portalEl)

    return () => {
      if (removeWhenNoChildren) {
        const el = document.querySelector(selector)
        if (el && el.childNodes.length === 0) el.remove()
      }
    }
  }, [])

  return portalEl ?? null
}
