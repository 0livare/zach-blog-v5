// import React from 'react'
// import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
// import {CopyBlock as CodeBlockWithCopy, monokaiSublime as codeTheme} from 'react-code-blocks'

// import * as allComponents from '~/components'
// import {ShowMore} from '~/components'
// import { twMerge as cs } from 'tailwind-merge'
// import styles from './markdown.module.scss'

// let mdxComponents: MDXComponents = {
//   ...allComponents,
//   Aside: MdxAside,
//   blockquote: BlockQuote,
//   pre: (props: any) => <Pre {...props.children.props} />,
//   Pre,
// }

// interface MarkdownProps {
//   mdxSource: MDXRemoteSerializeResult
// }

// export function Markdown(props: MarkdownProps) {
//   let {mdxSource} = props

//   return <MDXRemote {...mdxSource} components={mdxComponents} />
// }

// function Pre(props: React.HtmlHTMLAttributes<HTMLElement>) {
//   let {className, children} = props
//   let sourceCode = children as string
//   let language = className?.match(/language-(.*)/)?.[1]
//   let codeArg = null

//   if (language?.includes('--')) {
//     const parts = language.split('--')
//     language = parts[0]
//     codeArg = parts[1]
//   }

//   // I cannot figure out a way to pass JS code directly to a <Pre> or a <code> or anything
//   // directly within the MDX so that I can just manually add the <ShowMore>
//   // So my solution here is to add a fancy argument to the language portion of the
//   // code block to tell this rendering here to add the <ShowMore>
//   //
//   // However, clever use of this method could allow me to render absolutely component,
//   // even something that has nothing to do with a code block.  Something like:
//   // ```$MyComponent--prop1--prop2
//   // Interesting.
//   if (codeArg === 'showMore') {
//     return (
//       <ShowMore
//         id="zach"
//         classes={{
//           root: 'mb-2',
//           childWrapper: 'font-mono',
//         }}
//       >
//         <CodeBlock code={sourceCode} language={language} showLineNumbers={false} />
//       </ShowMore>
//     )
//   }

//   const sourceCodeLineCount = sourceCode.match(/\n/g)?.length ?? 0

//   return (
//     <div className="my-10 md:-mx-9">
//       <CodeBlock code={sourceCode} language={language} showLineNumbers={sourceCodeLineCount > 3} />
//     </div>
//   )
// }

// function CodeBlock(props: {code: string; language: string | undefined; showLineNumbers?: boolean}) {
//   const {code, language, showLineNumbers = true} = props
//   return (
//     <div className={cs('not-prose font-mono text-xs md:text-base', styles.scrollbar)}>
//       <CodeBlockWithCopy
//         text={code}
//         language={language}
//         theme={codeTheme}
//         showLineNumbers={showLineNumbers}
//         codeBlock
//         customStyle={{padding: 16, fontSize: 'inherit'}}
//       />
//     </div>
//   )
// }

// function BlockQuote(props: any) {
//   return <allComponents.Aside {...props} className="my-10" />
// }

// function MdxAside(props: any) {
//   let {className, ...rest} = props
//   return <allComponents.Aside {...rest} className={cs('my-10', className)} />
// }

// /* https://mdxjs.com/table-of-components/ */
// type MDXComponents = {
//   [key: string]: any
//   a?: any
//   blockquote?: any
//   br?: any
//   code?: any
//   em?: any
//   h1?: any
//   h2?: any
//   h3?: any
//   h4?: any
//   h5?: any
//   h6?: any
//   hr?: any
//   img?: any
//   li?: any
//   ol?: any
//   p?: any
//   pre?: any
//   strong?: any
//   ul?: any
// }
