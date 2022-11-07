import React from "react";
import "./index.css";
// import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../stores/actions/signin";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "../../utils/axios";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  // const handleSignin = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const result = await axios.post("/auth/login", form);
  //     toast.success(result.data.msg, {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.msg, {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   }
  // };

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(login(form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        localStorage.setItem("token", response.value.data.data.token);
        localStorage.setItem(
          "refreshtoken",
          response.value.data.data.refreshToken
        );
        setTimeout(() => {
          navigate("/");
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
              <h2>Login</h2>
            </div>
            <form className="form-login mx-5 px-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input text-start px-5 mb-5"
                onChange={handleChangeForm}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input text-start px-5 mb-5"
                onChange={handleChangeForm}
              />
              <div className="d-grid">
                <button className="auth-btn" onClick={handleSignin}>
                  Login
                </button>
              </div>
              <button
                className="text-start click-me mt-4"
                onClick={() => handleNavigate("forgot-password")}
              >
                Forgot password?
              </button>
              <h1 className="separator pt-4 mb-5 mt-5">
                Already have account?
              </h1>
            </form>
            <div className="m-5 px-5 form-login">
              <div className="">
                <div className="d-grid mt-5">
                  <button
                    className="sign-btn "
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
