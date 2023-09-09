import type {ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type HoverCardProps = MaybeLinkProps & {
  src: string
  alt?: string
  title: string
  subtitle?: string
  alwaysShowOverlay?: boolean
}

export function HoverCard(props: HoverCardProps) {
  const {src, alt, title, subtitle, className, to, alwaysShowOverlay, ...rest} = props

  return (
    <MaybeLink
      {...rest}
      className={cs(
        'SimpleCard',
        'relative w-80 h-52 max-w-full rounded overflow-hidden group',
        alwaysShowOverlay && 'transition-transform hover:scale-105 duration-500',
        className,
      )}
      to={to}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || title}
        className="w-full h-full object-cover"
        width={320}
        height={208}
      />
      <div
        className={cs(
          'absolute top-0 left-0 w-full h-full text-white bg-gray-700/90 no-underline p-4',
          'opacity-0 group-hover:opacity-100 group-focus:opacity-100',
          alwaysShowOverlay && 'opacity-100',
          'flex justify-center items-center flex-col text-center transition-opacity duration-100',
          to && 'cursor-pointer',
        )}
      >
        <h3 className="font-serif">{title}</h3>
        <h4 className="text-sm">{subtitle}</h4>
      </div>
    </MaybeLink>
  )
}

type MaybeLinkProps = ComponentProps<'a'> & {to?: string}

function MaybeLink(props: MaybeLinkProps) {
  const {to, children, ...rest} = props

  return to ? (
    <a {...rest} href={to}>
      {children}
    </a>
  ) : (
    <div {...(rest as any)}>{children}</div>
  )
}
