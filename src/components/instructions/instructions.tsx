import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {AddProps} from '../add-props'

export type InstructionsProps = React.ComponentProps<'div'> & {
  hideTitle?: boolean
}

export function Instructions(props: InstructionsProps) {
  const {className, children, hideTitle, ...rest} = props

  return (
    <div {...rest} className={cs('Instructions', 'mb-24', className)}>
      {!hideTitle && <h3 className="uppercase pb-4">Instructions</h3>}
      {React.Children.map(children, (child, index) => (
        <AddProps key={index} to={child} index={index + 1} />
      ))}
    </div>
  )
}

export type StepProps = React.ComponentProps<'div'> & {
  index?: number
  noWrapper?: boolean
}

export function Step(props: StepProps) {
  const {index, children, noWrapper, ...rest} = props

  return (
    <div
      {...rest}
      className="py-6 relative border-t md:last:border-b border-gray-400/40 dark:border-gray-400/40"
    >
      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tsecondary text-bgprimary font-bold rounded-full w-8 h-8 grid place-content-center">
        {index}
      </span>
      {noWrapper ? children : <p style={{margin: '0 !important'}}>{children}</p>}
    </div>
  )
}
