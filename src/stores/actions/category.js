import axios from "../../utils/axios";

export const getCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: axios.get("/category"),
  };
};

export const addCategory = (data) => {
  return {
    type: "ADD_CATEGORY",
    payload: axios.post("/category/create", data),
  };
};
