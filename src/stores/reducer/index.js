import { combineReducers } from "redux";

import user from "./user";
import category from "./category";
import signup from "./signup";
import signin from "./signin";
import forgotPassword from "./forgotPassword";
import resetPassword from "./resetPassword";

export default combineReducers({
  user,
  signup,
  signin,
  forgotPassword,
  resetPassword,
  category
});
