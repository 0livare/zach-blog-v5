import {Aside} from '../aside'

export const mdxComponents: MDXComponents = {
  blockquote: BlockQuote,
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
