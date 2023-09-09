import React from 'react'

// https://github.com/gregberge/react-merge-refs/blob/master/src/index.js
export function mergeRefs(...refs: React.Ref<any>[]) {
  return (value: any) => {
    refs.forEach((ref) => {
      if (!ref) {
        return
      } else if (typeof ref === 'function') {
        ref(value)
      } else if (typeof ref === 'object') {
        // @ts-ignore
        ref.current = value
      }
    })
  }
}
