import * as z from "zod"

export const postPatchSchema = z.object({
  title: z.string().min(3).max(128).optional(),
  imageUrl: z.string().url().optional(),
  description: z.string().min(3).max(256).optional(),
  // TODO: Type this properly from editorjs block types?
  content: z.any().optional(),
})