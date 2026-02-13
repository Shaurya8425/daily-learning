import z from "zod";

export const signupSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  name: z.string(),
  role: z.enum(["STUDENT", "INSTRUCTOR"]),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignupSchema = z.infer<typeof signupSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
