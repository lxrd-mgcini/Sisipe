import { z } from "zod";

const usernameSchema = z.string().min(3).max(256).trim();
const emailSchema = z.string().email().trim();
const passwordSchema = z.string().min(8).max(256).trim();

export const verificationCodeSchema = z.object({
  verificationCode: z.string().length(6).trim(),
});

export const userLoginSchema = z.object({
  email: emailSchema,
  passwordSchema: passwordSchema,
});
export const userRegistrationSchema = z.object({
  email: emailSchema,
  username: usernameSchema,
  password: passwordSchema,
});
