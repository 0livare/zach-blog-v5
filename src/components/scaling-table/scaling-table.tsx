import React, {type ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {Tooltip} from '../tooltip'
import {ScalingTableContext, useScaleContext} from './context'
import {convertToAppropriateUnit, roundForDisplay} from './convert-to-appropriate-unit'
import {round} from './math-util'

type ScalingTableProps = ComponentProps<'table'> & {}

export function ScalingTable(props: ScalingTableProps) {
  const {className, children, ...rest} = props
  const [scale, setScale] = React.useState(1)
  const [hundredPercentIngMassInG, setHundredPercentIngMassInG] = React.useState(100)

  console.log('children', children)

  return (
    <table {...rest} className={cs('ScalingTable', className)}>
      <thead className="uppercase">
        <tr>
          <th>Ingredient</th>
          <th>Mass</th>
          <th>Volume</th>
          <th>Scaling</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

type IngredientProps = {
  name: string
  massInGrams?: number | string
  volume?: number | string
  volumeUnit?: string
  scalePercent?: number
}

export function Ingredient(props: IngredientProps) {
  const {name, massInGrams, volume, volumeUnit, scalePercent} = props
  const {hundredPercentIngMassInG, setHundredPercentIngMassInG} = useScaleContext()

  React.useEffect(() => {
    if (scalePercent !== 100) return
    setHundredPercentIngMassInG(massInGrams as number)
  }, [scalePercent, massInGrams, setHundredPercentIngMassInG])

  let determinedPct =
    scalePercent || typeof massInGrams === 'number'
      ? round(((massInGrams as number) / hundredPercentIngMassInG) * 100).to((val) =>
          val < 5 ? 0.1 : 1,
        )
      : undefined

  return (
    <tr>
      <td>{name}</td>
      <td colSpan={typeof massInGrams === 'string' ? 3 : 1}>
        <AdjustableAmount
          amount={massInGrams}
          unit="g"
          scalePercent={determinedPct}
          keepStrAmountAtScale
        />
      </td>
      <td>
        <AdjustableAmount amount={volume} unit={volumeUnit} scalePercent={scalePercent} />
      </td>
      <td>
        {determinedPct}
        {determinedPct && '%'}
      </td>
    </tr>
  )
}

type AdjustableAmountProps = {
  amount: number | string | undefined
  unit?: string
  scalePercent: number | undefined
  /**
   * Normally, if the table is scaled and a string was passed for the amount,
   * that string will be hidden because it is assumed to no longer be accurate.
   * With this prop though, the amount will be maintained regardless of the scale.
   */
  keepStrAmountAtScale?: boolean
}

function AdjustableAmount(props: AdjustableAmountProps) {
  const {amount, unit, scalePercent, keepStrAmountAtScale} = props
  const {scale, setScale} = useScaleContext()

  const [isEditing, setIsEditing] = React.useState(false)
  const [currentAmount, setCurrentAmount] = React.useState((amount as number) * scale)

  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [isEditing])

  const currentAmountRef = React.useRef(currentAmount)
  currentAmountRef.current = currentAmount
  React.useEffect(() => {
    if (typeof amount !== 'number') return
    if (currentAmountRef.current !== amount * scale) {
      setCurrentAmount(roundForDisplay({amount: amount * scale, unit}))
    }
  }, [scale, unit, amount])

  if (amount == null) {
    return null
  }

  if (typeof amount === 'string') {
    return <>{keepStrAmountAtScale ? amount : scale === 1 ? amount : '-'}</>
  }

  if (scalePercent == null) {
    let scaledAmount = amount * scale
    let {amount: convertedAmount, unit: convertedUnit} = convertToAppropriateUnit({
      amount: scaledAmount,
      unit,
    })

    if (convertedAmount === 1 && convertedUnit === 'cups') convertedUnit = 'cup'

    return (
      <>
        {roundForDisplay({amount: convertedAmount, unit})}&nbsp;
        {convertedUnit}
      </>
    )
  }

  if (!isEditing) {
    return (
      <Tooltip title="Click here to scale this recipe up or down">
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-600 font-bold dark:text-blue-300"
        >
          {currentAmount}&nbsp;
          {unit === 'cups' && currentAmount === 1 ? 'cup' : unit}
        </button>
      </Tooltip>
    )
  }

  function handleSubmit() {
    setIsEditing(false)
    setScale(currentAmount / (amount as number))
  }

  return (
    <form
      className="inline whitespace-nowrap"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <input
        ref={inputRef}
        type="number"
        step="0.05"
        value={currentAmount}
        className="w-[6ch] text-gray-900 mr-2 border-2 border-blue-500 rounded"
        onChange={(e) => {
          let newVal = e.target.value
          if (!newVal.match(/[0-9]*/)) return
          setCurrentAmount(Number(newVal))
        }}
        onBlur={handleSubmit}
      />
      {unit}
    </form>
  )
}
