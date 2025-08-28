import { Router } from "express";
import { getAllProductsController } from "../controllers/products.controller";

export const productRoutes = Router();

productRoutes.get("/api/v1/products", getAllProductsController);
