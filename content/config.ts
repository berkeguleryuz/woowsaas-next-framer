import { z } from "zod";

// Blog şeması
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.string(),
  author: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
  }),
});

// Kariyer şeması
const careersSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  remote: z.boolean(),
  type: z.string(),
});

export { blogSchema, careersSchema };
