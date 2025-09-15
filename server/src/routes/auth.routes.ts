import { Router } from "express";
import {
  loginUserController,
  registerUserController,
} from "../controllers/auth.controller";

export const authRoutes = Router();

authRoutes.post(`/auth/login`, loginUserController);
authRoutes.post(`/auth/register`, registerUserController);
