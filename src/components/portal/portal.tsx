import React from 'react'
import {createPortal} from 'react-dom'
import {usePortalElement} from './use-portal-element'

export type PortalProps = {
  children: React.ReactNode
}

/**
 * Render elements inside of a React [portal](https://react.dev/reference/react-dom/createPortal).
 *
 * This component ensures that a single portal element is created in the DOM,
 * regardless of how many times the component is rendered.
 */
export function Portal({children}: PortalProps) {
  const portalEl = usePortalElement({
    id: 'zach-portal',
    removeWhenNoChildren: true,
    // See: https://www.olivare.net/blog/isolation-isolate
    style: {isolation: 'isolate'},
  })

  return portalEl ? createPortal(children, portalEl) : null
}
