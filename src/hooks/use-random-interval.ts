import React from 'react'
import {random} from '~/utils'

/**
 * Invoke a callback at a bounded random interval
 * @param callback The function to invoke
 * @param min The minimum amount of time between invocations (in milliseconds)
 * @param max The maximum amount of time between invocations (in milliseconds)
 * @returns A function to cancel the interval
 */
export function useRandomInterval(callback: Function, args: {min: number; max: number}) {
  const {min, max} = args

  const timeoutId = React.useRef<number | undefined>(undefined)
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  React.useEffect(() => {
    let isEnabled = typeof min === 'number' && typeof max === 'number'
    if (!isEnabled) return

    function handleTick() {
      const nextTickAt = random(min, max)
      timeoutId.current = window.setTimeout(() => {
        callbackRef.current()
        handleTick()
      }, nextTickAt)
    }
    handleTick()

    return () => window.clearTimeout(timeoutId.current)
  }, [min, max])

  const cancel = React.useCallback(() => window.clearTimeout(timeoutId.current), [])
  return cancel
}
