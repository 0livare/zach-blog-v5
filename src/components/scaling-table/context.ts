import React, {useContext} from 'react'

export type ScalingTableContextShape = {
  scale: number
  setScale(scale: number): void
  hundredPercentIngMassInG: number
  setHundredPercentIngMassInG(hundredPercentIngMassInG: number): void
}

export const ScalingTableContext = React.createContext({
  scale: 1,
  setScale: (scale: number) => {},
  hundredPercentIngMassInG: 100,
  setHundredPercentIngMassInG: (setHundredPercentIngMassInG: number) => {},
})

export function useScaleContext() {
  return useContext(ScalingTableContext)
}
