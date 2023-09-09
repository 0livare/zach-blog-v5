// import {MDXRemoteSerializeResult} from 'next-mdx-remote'

// import {type PostFrontMatter} from '~/utils'
// import {Markdown} from './markdown'
// import {Prose} from './prose'

// export type Post = {
//   code: string
// }

// export type BlogPostProps = {
//   mdxSource: MDXRemoteSerializeResult
//   frontMatter: PostFrontMatter
// }

// export function BlogPost(props: BlogPostProps) {
//   let {mdxSource, frontMatter} = props

//   return (
//     <div className="relative">
//       <Prose>
//         {frontMatter.imageFilePath && (
//           // eslint-disable-next-line @next/next/no-img-element
//           <img
//             src={frontMatter.imageFilePath}
//             alt={frontMatter.title}
//             width={736}
//             height={384}
//             className="object-cover w-screen md:w-full h-56 md:h-96 dark:opacity-80 -mt-4 md:-mt-16 mb-16"
//           />
//         )}

//         <Markdown mdxSource={mdxSource} />
//       </Prose>
//     </div>
//   )
// }
