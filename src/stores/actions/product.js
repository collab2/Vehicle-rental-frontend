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

export const getProductById = (id) => {
  return {
    type: "GET_PRODUT_BY_ID",
    payload: axios.get(`/product/${id}`),
  };
};

export const editProduct = (id, data) => {
  return {
    type: "EDIT_PRODUCT",
    payload: axios.patch(`/product/update/${id}`, data),
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios.delete(`/product/delete/${id}`),
  };
};
