import {twMerge} from 'tailwind-merge'

type ContrastTextTypeProps = React.ComponentProps<'div'> & {
  title: string
  aa: boolean
  aaa?: boolean
}

export function ContrastTextType(props: ContrastTextTypeProps) {
  const {children, className, title, aa, aaa, ...rest} = props
  return (
    <>
      <h2 className="text-3xl text-tprimary block border-b border-tprimary mt-8 mb-2">{title}</h2>
      <div {...rest} className={twMerge('flex gap-8 justify-between', className)}>
        <div>
          <div>
            WCAG AA: <PassFail pass={aa} />
          </div>
          {aaa != undefined && (
            <div>
              WCAG AAA: <PassFail pass={aaa} />
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  )
}

function PassFail(props: React.ComponentProps<'div'> & {pass: boolean}) {
  const {className, pass, ...rest} = props
  return (
    <span
      {...rest}
      className={twMerge(
        'rounded-full text-white py-1 px-3 text-sm ml-2 my-1  inline-block -translate-y-1',
        pass ? 'bg-green-600' : 'bg-red-500',
        className,
      )}
    >
      {pass ? 'Pass' : 'Fail'}
    </span>
  )
}
