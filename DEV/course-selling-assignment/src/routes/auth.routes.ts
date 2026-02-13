import express from "express";
import { signup, login } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Example protected route
router.get("/me", authMiddleware, (req: any, res) => {
  res.json({
    userId: req.userId,
    role: req.role,
  });
});

export default router;
