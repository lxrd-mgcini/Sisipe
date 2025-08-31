import { z } from "zod";

export const nameSchema = z.string().trim().min(1).max(255);
export const descriptionSchema = z.string().trim().max(4096);
export const imgUrlSchema = z.string().url();
export const priceSchema = z.number().min(0);

export const productIdSchema = z
  .string()
  .trim()
  .min(1, { message: "Product ID is required" });

export const createProductSchema = z.object({
  name: nameSchema,
  description: descriptionSchema,
  imgUrl: imgUrlSchema,
  price: priceSchema,
});
