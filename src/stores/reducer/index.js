import { combineReducers } from "redux";

import user from "./user";
<<<<<<< HEAD
import counter from "./counter";

export default combineReducers({
  user,
  counter,
=======
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
>>>>>>> 5fb840424e3031eb4c191ec9e9936aec02ed7e02
});
