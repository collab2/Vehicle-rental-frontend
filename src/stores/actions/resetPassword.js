import axios from "../../utils/axios";

export const resetPassword = (OTPReset, form) => {
  return {
    type: "RESET_PASSWORD",
    payload: axios.patch(`auth/resetPassword/${OTPReset}`, form),
  };
};
