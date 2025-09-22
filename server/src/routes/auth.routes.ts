import { Router } from "express";
import {
  forgotPasswordController,
  loginUserController,
  logOutUserController,
  // loginUserController,
  registerUserController,
  verifyEmailController,
} from "../controllers/auth.controller";

export const authRoutes = Router();

// authRoutes.post(`/auth/login`, loginUserController);
authRoutes.post(`/auth/register`, registerUserController);
authRoutes.post(`/auth/login`, loginUserController);
authRoutes.post(`/auth/logout`, logOutUserController);
authRoutes.post(`/auth/forgot-password`, forgotPasswordController);
authRoutes.post(`/auth/verify-email`, verifyEmailController);
