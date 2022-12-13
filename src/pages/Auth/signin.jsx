import React from "react";
import "./index.css";
// import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../stores/actions/signin";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getProduct } from "../../stores/actions/product";
import "react-toastify/dist/ReactToastify.css";
// import axios from "../../utils/axios";
import dot from "../../assets/img/dot.png";
import logo from "../../assets/img/logo.png";
import * as Icon from "react-bootstrap-icons";
import { getUserById } from "../../stores/actions/user";
import { getCategory } from "../../stores/actions/category";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const signin = useSelector((state) => state.signin);

  console.log(signin.isLoading);

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
        toast.success(response.value?.data?.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        // dispatch(getProductById(response.value?.data?.data?.productId));
        dispatch(getProduct(50));
        dispatch(getUserById(response.value.data.data.userId));
        dispatch(getCategory());
        localStorage.setItem("token", response.value?.data?.data?.token);
        localStorage.setItem(
          "refreshtoken",
          response.value?.data?.data?.refreshToken
        );
        localStorage.setItem("userId", response.value?.data?.data?.userId);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) =>
        toast.error(error.response?.data?.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid px-0 mx-0">
      <div className="row mx-0 h-100 px-0 mx-0">
        <div className="col-md-6 col-lg-6 col-xl-6 left-side bg-danger"></div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-12 right-side d-flex flex-column justify-content-center px-0 py-0 h-100">
          <div className="d-flex align-items-center auth-img-icon">
            <img src={logo} alt="van" className="auth-img-logo" />
            <div className="auth-img-text">
              <h2 className="font-playfair">Auto Rent</h2>
              <span>Best Solution for Your Journey</span>
            </div>
          </div>
          <div className="desktop-display">
            <div className="mx-5 px-5 mb-3 mt-5">
              <h2 className="font-playfair">Login</h2>
            </div>
            <form className="form-login mx-5 mt-5 px-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input text-start px-5 mb-3"
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
                  {signin.isLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </div>
              <button
                className="text-start click-me mt-4"
                onClick={() => handleNavigate("forgot-password")}
              >
                Forgot password?
              </button>
              <h3 className="separator pt-4 my-2">
                {"Don't have an account?"}
              </h3>
            </form>
            <div className="m-5 px-5 form-login">
              <div className="">
                <div className="d-grid mt-3">
                  <button
                    className="sign-btn "
                    onClick={() => handleNavigate("signup")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="m-5 px-5">
              <div>
                <img src={dot} alt="van" className="auth-img-dot" />
              </div>
              <div className="footer-content w-50 pt-4">
                <p>
                  Plan and book your perfect trip with expert advice, travel
                  tips for vehicle information from us
                </p>
              </div>
            </div>
            <div className="footer-content m-5 px-5">
              <p>©2020 Vehicle Rental Center. All rights reserved</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className=" d-flex justify-content-center border-top py-4 w-75">
                <Icon.Facebook className="mx-3" size={20} />
                <Icon.Twitter className="mx-3" size={20} />
                <Icon.Instagram className="mx-3" size={20} />
                <Icon.Linkedin className="mx-3" size={20} />
                <Icon.Youtube className="mx-3" size={20} />
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
