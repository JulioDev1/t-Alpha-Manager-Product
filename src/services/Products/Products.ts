import { AxiosResponse } from "axios";
import { ProductDto } from "../../Model/ProductDto";
import api from "../api";

export const createProduct = async (
  product: ProductDto
): Promise<AxiosResponse<any, any> | undefined> => {
  try {
    const response = await api().post("/api/products/create-product", product, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response;
  } catch (err) {
    console.error(err);
  }
};
export const getAllProducts = async (): Promise<
  AxiosResponse<any, any> | undefined
> => {
  try {
    const response = await api().get("/api/products/get-all-products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response;
  } catch (err) {
    console.error("outro error" + err);
  }
};
