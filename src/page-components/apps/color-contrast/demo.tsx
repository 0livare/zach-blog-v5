import {twMerge} from 'tailwind-merge'

export type DemoProps = React.ComponentProps<'div'> & {
  bgColorStr: string | undefined
  textColorStr: string | undefined
}

export function Demo(props: DemoProps) {
  const {bgColorStr, textColorStr, className, children, ...rest} = props
  return (
    <div
      {...rest}
      className={twMerge('border border-black/20 p-4 text-center', className)}
      style={{backgroundColor: bgColorStr, color: textColorStr}}
    >
      {children || 'The five boxing wizards jump quickly.'}
    </div>
  )
}
