import {Aside} from '../aside'
import styles from './markdown.module.scss'

export const mdxComponents: MDXComponents = {
  blockquote: BlockQuote,
  pre: Pre,
}

function Pre(props: any) {
  // Avoid a warning about tabindex vs tabIndex
  const {tabindex, ...rest} = props
  return (
    <div className={styles.scrollbar}>
      <pre {...rest} className={`${props.className} ${styles.pre}`} tabIndex={tabindex} />
    </div>
  )
}

function BlockQuote(props: any) {
  return <Aside {...props} className="my-10" />
}

/* https://mdxjs.com/table-of-components/ */
type MDXComponents = {
  [key: string]: any
  a?: any
  blockquote?: any
  br?: any
  code?: any
  em?: any
  h1?: any
  h2?: any
  h3?: any
  h4?: any
  h5?: any
  h6?: any
  hr?: any
  img?: any
  li?: any
  ol?: any
  p?: any
  pre?: any
  strong?: any
  ul?: any
}
