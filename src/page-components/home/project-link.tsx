import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

export function ProjectLink(props: {to: string; label: string; className?: string}) {
  let {to, label, className, ...rest} = props
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={cs('ProjectLink', className)}
      style={{color: 'var(--teal)'}}
      {...rest}
    >
      {label}
    </a>
  )
}
