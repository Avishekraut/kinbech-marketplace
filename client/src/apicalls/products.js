import { axiosInstance } from "./axiosinstance";

//add a new product
export const Addproduct = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/products/add-product",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all products
export const GetProducts = async () => {
  try {
    const response = await axiosInstance.get("api/products/get-products");
    return response.data;
  } catch (error) {
    return error.message;
  }
};
