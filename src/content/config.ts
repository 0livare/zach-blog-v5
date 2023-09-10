import {defineCollection, z} from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date(),
    tags: z.string().transform((val) => val.split(', ')),
    heroImage: z.string().optional(),
    published: z.boolean().optional(),
  }),
})

export const collections = {blog}
