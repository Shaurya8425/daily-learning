import z from "zod";

const createCourseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
});

export type CreateCourseSchema = z.infer<typeof createCourseSchema>;
