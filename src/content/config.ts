import { z, defineCollection } from "astro:content";

const BlogPosts = defineCollection({
  schema: {
    title: z.string(),
    excerpt: z.string(),
    category: z.string().trim().optional(),
    author: z.string().trim().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishDate: z.date(),
  },
});

export const collections = {
  blog: BlogPosts,
};
