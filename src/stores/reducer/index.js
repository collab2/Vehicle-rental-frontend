import { combineReducers } from "redux";

import user from "./user";
import counter from "./counter";
import category from "./category";
import signup from "./signup";
import signin from "./signin";
import forgotPassword from "./forgotPassword";
import resetPassword from "./resetPassword";
import product from "./product";

export default combineReducers({
  user,
  counter,
  signup,
  signin,
  forgotPassword,
  resetPassword,
  category,
  product,
});
