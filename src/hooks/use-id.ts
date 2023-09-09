import {useMemo} from 'react'

export function useId(prefix?: string, existingId?: string) {
  return useMemo(() => {
    if (existingId) return existingId

    const idPrefix = prefix ? prefix + '-' : undefined
    return (idPrefix || '') + crypto.randomUUID()
  }, [existingId, prefix])
}
