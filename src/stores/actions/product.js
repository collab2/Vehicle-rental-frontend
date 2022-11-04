import axios from "../../utils/axios";

export const getProduct = () => {
  return {
    type: "GET_PRODUCT",
    payload: axios.get("/product"),
  };
};

export const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: axios.post("/product/create", data),
  };
};
