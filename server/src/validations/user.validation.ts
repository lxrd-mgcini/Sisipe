import { z } from "zod";

const emailSchema = z.string().email().trim();
const passwordSchema = z
  .string()
  .min(8)
  .max(50)
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character"
  );

export const userLoginSchema = {
  email: emailSchema,
  passwordSchema: passwordSchema,
};

export const userRegistrationSchema = z.object({
  email: emailSchema,
  passwordSchema: passwordSchema,
});
