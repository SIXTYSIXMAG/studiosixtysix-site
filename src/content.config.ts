import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.number(),
      services: z.array(z.string()),
      heroImage: image(),
      gallery: z.array(image()).optional(),
      publishedIn: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number(),
      credits: z
        .object({
          editorialDirection: z.string().optional(),
          photography: z.string().optional(),
          styling: z.string().optional(),
          setDesign: z.string().optional(),
          words: z.string().optional(),
          other: z.array(z.object({ role: z.string(), name: z.string() })).optional(),
        })
        .optional(),
    }),
});

export const collections = { work };
