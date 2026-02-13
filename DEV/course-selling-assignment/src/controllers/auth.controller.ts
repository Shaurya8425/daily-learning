import type { Request, Response } from "express";
import { prisma } from "../../db";
import bcrypt from "bcrypt";
import { loginSchema, signupSchema } from "../schemas/auth.schema";
import z from "zod";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const parsed = signupSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      errors: z.treeifyError(parsed.error),
    });
  }
  const { email, password, name, role } = req.body;

  try {
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(409).json({ error: "Email Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        role,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User Created" });
  } catch (err) {
    res.status(500).json({ error: "Signup Failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      errors: z.treeifyError(parsed.error),
    });
  }

  const { email, password } = parsed.data;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    res.json({ token });
  } catch {
    res.status(500).json({ error: "Login Failed" });
  }
};
