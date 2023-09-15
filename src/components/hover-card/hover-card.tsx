import type {ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type HoverCardProps = MaybeLinkProps & {
  src: string | undefined
  title: string
  subtitle?: string
  alwaysShowOverlay?: boolean
}

export function HoverCard(props: HoverCardProps) {
  const {src, title, subtitle, className, to, alwaysShowOverlay, ...rest} = props

  return (
    <MaybeLink
      {...rest}
      className={cs(
        'SimpleCard',
        'relative block w-80 h-52 max-w-full rounded overflow-hidden group',
        'bg-cover bg-center opacity-90',
        alwaysShowOverlay && 'transition-transform hover:scale-105 duration-500',
        className,
      )}
      to={to}
    >
      <img src={src} className="w-full h-full object-cover" width={320} height={208} />
      <div
        className={cs(
          'absolute top-0 left-0 w-full h-full text-white bg-gray-700/90 no-underline p-4',
          'opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100',
          alwaysShowOverlay && 'opacity-100',
          'flex justify-center items-center flex-col text-center transition-opacity duration-100',
          to && 'cursor-pointer',
        )}
      >
        <div className="opacity-100">
          <h3 className="font-serif text-3xl mb-4">{title}</h3>
          <h4 className="text-sm">{subtitle}</h4>
        </div>
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
