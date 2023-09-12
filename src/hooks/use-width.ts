import React from 'react'

import {useDimension} from './use-dimension'

/**
 * This hook lets you monitor the width of a DOM element.
 *
 * @param {React.RefObject} domRef A ref attached to the DOM element you wish to monitor
 * @param {boolean} on  Whether or not to actively listen for width changes
 * @returns `width`: The current width of the dom element
 */
export function useWidth(domRef: React.RefObject<HTMLElement>, {on = true} = {}) {
  const getWidth = React.useCallback((el: HTMLElement) => (el ? el.offsetWidth : 0), [])
  const [width] = useDimension(domRef, getWidth, {
    on,
    causeReRenders: true,
  })
  return width
}
