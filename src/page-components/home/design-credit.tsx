import type {ComponentProps} from 'react'

export type DesignCreditProps = ComponentProps<'div'>

export function DesignCredit() {
  return (
    <div className="w-full min-h-[50px] bg-navy text-white flex justify-center items-center bg-opacity-80 p-4">
      This site was beautifully designed by
      <a
        href="https://kierstynrobbins.com"
        target="_blank"
        rel="noreferrer"
        className="ml-1 text-teal"
      >
        Kierstyn Olivare
      </a>
    </div>
  )
}
