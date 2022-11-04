import axios from "../../utils/axios";

export const forgotPassword = (data) => {
  return {
    type: "FORGOT_PASSWORD",
    payload: axios.post("auth/forgotPassword", data),
  };
};
