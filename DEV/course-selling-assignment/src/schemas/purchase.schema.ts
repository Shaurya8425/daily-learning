import z from "zod";

const purchaseCourseSchema = z.object({
  courseId: z.string(),
});

export type PurchaseCourseSchema = z.infer<typeof purchaseCourseSchema>;
