import { Request, Response } from "express";
import ProductModel from "../models/product.model";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import {
  createProductSchema,
  productIdSchema,
} from "../validations/product.validation";
import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  updateProductByIdService,
} from "../services/product.services";
import { HTTPSTATUS } from "../config/http.config";

export const getAllProductsController = asyncHandler(
  async (req: Request, res: Response) => {
    const products = await getAllProductsService();
    res.status(HTTPSTATUS.OK).json(products);
  }
);

export const createProductController = asyncHandler(
  async (req: Request, res: Response) => {
    const data = createProductSchema.parse(req.body);
    const product = await createProductService(data);

    res.status(HTTPSTATUS.OK).json(product);
  }
);

export const deleteProductByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const productId = productIdSchema.parse(req.params.id);

    await deleteProductService(productId);

    res.status(HTTPSTATUS.OK).json({
      message: "Product deleted successfully",
    });
  }
);

export const updateProductByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const productId = productIdSchema.parse(req.params.id);
    const product = createProductSchema.parse(req.body);

    const updatedProduct = await updateProductByIdService(productId, product);

    res.status(HTTPSTATUS.OK).json(updatedProduct);
  }
);
