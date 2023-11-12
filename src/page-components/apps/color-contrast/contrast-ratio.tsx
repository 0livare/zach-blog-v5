import type React from 'react'
import {twMerge} from 'tailwind-merge'

type ContrastRatioProps = React.ComponentProps<'div'> & {
  contrast: number
  pass: boolean
}

export function ContrastRatio(props: ContrastRatioProps) {
  const {className, contrast, pass, ...rest} = props
  return (
    <div
      {...rest}
      className={twMerge(
        pass ? 'border-green-400' : 'border-red-500',
        'p-8 mt-16 border-2 inline-flex flex-col items-center self-center',
        className,
      )}
    >
      <div className="text-lg">Contrast Ratio</div>
      <div className="text-3xl">{contrast.toFixed(2) || '--'} : 1</div>
    </div>
  )
}
