import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const varieties = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/varieties" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    idealFor: z.array(z.string()),
    sunlight: z.string(),
    maintenance: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { varieties, blog };
