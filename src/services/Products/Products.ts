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
    const response = await api().get<{ data: { products: ProductDto } }>(
      "/api/products/get-all-products",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response;
  } catch (err) {
    console.error("outro error" + err);
  }
};

export const getProductById = async (
  id: number
): Promise<AxiosResponse<any, any> | undefined> => {
  try {
    const response = await api().get<{ data: { products: ProductDto } }>(
      `api/products/get-one-product/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.error("outro error" + err);
  }
};
export const updateProductApi = async (
  product: ProductDto
): Promise<AxiosResponse<any, any> | undefined> => {
  const { id, ...productData } = product;

  try {
    const response = await api().patch(
      `/api/products/update-product/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.error("outro error" + err);
  }
};
export const deleteProduct = async (
  id: number
): Promise<AxiosResponse<any, any> | undefined> => {
  try {
    const response = await api().delete(`/api/products/delete-product/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (err) {
    console.error("outro error" + err);
  }
};
