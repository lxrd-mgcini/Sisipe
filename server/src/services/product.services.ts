import ProductModel from "../models/product.model";

export const getAllProductsService = async () => {
  const products = await ProductModel.find({});
  return products;
};

export const createProductService = async (data: {
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}) => {
  const product = new ProductModel(data);
  await product.save();

  return product;
};

export const deleteProductService = async (id: string) => {
  const product = await ProductModel.findByIdAndDelete({ _id: id });

  if (!product) {
    throw new Error("Product not found");
  }
  return;
};

export const updateProductByIdService = async (
  id: string,
  data: {
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  }
) => {
  const product = await ProductModel.findByIdAndUpdate({ _id: id }, data);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
