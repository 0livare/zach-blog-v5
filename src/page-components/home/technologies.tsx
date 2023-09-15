import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type TechnologiesProps = React.ComponentProps<'div'>

export function Technologies(props: TechnologiesProps) {
  let {className, ...rest} = props

  return (
    <div
      {...rest}
      className={cs(
        'Technologies',
        'flex justify-center min-h-[500px] bg-gradient-to-b from-teal to-teal-dark',
        className,
      )}
    >
      <div className="flex flex-col justify-evenly items-center w-full lg:w-auto lg:items-start">
        <BuildBlock label="Build In">
          TypeScript, JavaScript, CSS, HTML, C#, XAML, Java, Swift, Python
        </BuildBlock>
        <BuildBlock label="Build With" className="lg:ml-36">
          Git, React, Svelte, Angular, Node.js, Bun, Electron, Next.js, Astro, React Query, Tailwind
          CSS, SASS, Yup, vite, esbuild, Storybook UI, Gremlin
        </BuildBlock>
        <BuildBlock label="Build For" className="lg:ml-72">
          Web, Node, CLI, Windows, IoT, Mac, iOS, Android, People
        </BuildBlock>
      </div>
    </div>
  )
}

function BuildBlock(props: {label: string; children: string; className?: string}) {
  let {label, children, className} = props
  return (
    <div
      className={cs(
        'BuildBlock',
        'md:m-4 p-4 min-h-[116px] w-11/12 md:w-9/12 lg:w-auto lg:min-w-[700px] lg:max-w-[700px]  flex items-center bg-navy text-white md:text-xl gap-4',
        className,
      )}
    >
      <p className="font-serif font-semibold uppercase text-xl md:text-2xl w-max tracking-widest md:tracking-wide md:shrink-0">
        {label}
      </p>
      {children}
    </div>
  )
}
