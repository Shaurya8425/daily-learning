import z from "zod";

const createLessonSchema = z.object({
  title: z.string(),
  content: z.string(),
  courseId: z.string(),
});

export type CreateLessonSchema = z.infer<typeof createLessonSchema>;
