import React from "react";
// import authimage from "../../assets/img/authimage.png";
import "./index.css";
// import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import Logo from "../../component/Logo";
import { resetPassword } from "../../stores/actions/resetPassword";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "../../utils/axios";

export default function ResetPassword() {
  const { OTPReset } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(OTPReset, form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      })
      .catch((error) =>
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid px-0 vh-100">
      <div className="row mx-0 h-100">
        <div className="col-md-6 col-lg-6 col-xl-6 col-12 d-none d-md-block px-0 mx-0 container-image h-100">
          <div className="left-side h-100"></div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-12 right-side d-flex flex-column justify-content-center px-0 py-0 h-100">
          {/* <div className="mobile-display">
            <img src={authimage} alt="van" className="" />
          </div> */}
          <div className="desktop-display h-100 overflow-hidden">
            <div className="mx-5 px-5 mb-5 mt-5">
              <h1>Reset Password</h1>
              <h3 className="mt-1">
                Change your password to reactivate <br /> your account
              </h3>
            </div>
            <form className="form-login mx-5 px-5">
              <input
                type="password"
                name="newPassword"
                placeholder="Password"
                className="form-input text-start px-5 mb-5"
                onChange={handleChangeForm}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input text-start px-5 mb-5"
                onChange={handleChangeForm}
              />
              <div className="d-grid">
                <button className="auth-btn" onClick={handleResetPassword}>
                  Reset Password
                </button>
              </div>
              <button className="text-start click-me mt-2">
                Forgot password?
              </button>
              <h1 className="separator pt-4 mt-4">or try another way</h1>
            </form>
            <div className="mx-5 px-5 form-login">
              <div className="">
                <div className="d-grid mt-3">
                  <button
                    className="sign-btn mt-3"
                    onClick={() => handleNavigate("signup")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
