import { registerType } from "@/types/API.type";
import API from "./axios-client";

export const registerMutationFn = async (data: registerType) =>
  await API.post("/auth/register", data);


export const getAllProducts = async () => {
  try {
    const response = await API.get('/products');
    console.log("request sent")
    return response.data;
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

