import { Router } from "express";
import {
  // loginUserController,
  registerUserController,
  verifyEmailController,
} from "../controllers/auth.controller";

export const authRoutes = Router();

// authRoutes.post(`/auth/login`, loginUserController);
authRoutes.post(`/auth/register`, registerUserController);
authRoutes.post(`/auth/verify-email`, verifyEmailController);
