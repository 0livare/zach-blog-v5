import {useEffect, useRef, useCallback} from 'react'
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

  const timeoutId = useRef<number | undefined>(undefined)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
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

  const cancel = useCallback(() => window.clearTimeout(timeoutId.current), [])
  return cancel
}
