import axios from "../../utils/axios";

export const reserve = (data) => {
  return {
    type: "ADD_RESERVATION",
    payload: axios.post("/reservation/create", data),
  };
};
