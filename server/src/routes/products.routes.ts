import { Router } from "express";
import {
  createProductController,
  deleteProductByIdController,
  getAllProductsController,
  getProductByIdController,
  updateProductByIdController,
} from "../controllers/products.controller";
import { config } from "../config/app.config";

export const productRoutes = Router();

productRoutes.post(`/products`, createProductController);
productRoutes.get(`/products`, getAllProductsController);
productRoutes.get(`/products/:id`, getProductByIdController);
productRoutes.put(`/products/:id`, updateProductByIdController);
productRoutes.delete(`/products/:id`, deleteProductByIdController);
