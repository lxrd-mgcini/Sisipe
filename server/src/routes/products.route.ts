import { Router } from "express";
import {
  createProductController,
  deleteProductByIdController,
  getAllProductsController,
  updateProductByIdController,
} from "../controllers/products.controller";
import { config } from "../config/app.config";

export const productRoutes = Router();

productRoutes.get(`/products`, getAllProductsController);
productRoutes.post(`/products`, createProductController);
productRoutes.delete(`/products/:id`, deleteProductByIdController);
productRoutes.put(`/products/:id`, updateProductByIdController);
