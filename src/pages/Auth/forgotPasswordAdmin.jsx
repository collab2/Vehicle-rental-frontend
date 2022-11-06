import React from "react";
import authimage from "../../assets/img/authimage.png";
import "./index.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../component/Logo";
import { forgotPassword } from "../../stores/actions/forgotPassword";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "../../utils/axios";

export default function ForgotPasswordAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
  });

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
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
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col-md-6 col-lg-6 col-xl-6 col-6  px-0 mx-0 container-image">
          <div className="left-side">
            <img src={authimage} alt="van" className="authimage" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-12 right-side d-flex flex-column justify-content-start align-items-start px-0 py-0">
          {/* <div className="mobile-display">
            <img src={authimage} alt="van" className="" />
          </div> */}
          <div className="desktop-display">
            <div className="m-5 p-5">
              <h1>Forgot Password</h1>
              <h3 className="mb-5">
                Enter your verified account email and we <br /> will send you a
                link to reset your password
              </h3>
            </div>
            <form className="form-login ms-5 ps-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input text-start px-5 mb-5"
                onChange={handleChangeForm}
              />
              <div className="d-grid">
                <button
                  className="auth-btn mb-5"
                  onClick={handleForgotPassword}
                >
                  Send Password Reset Email
                </button>
              </div>
              <h1 className="separator pt-4 mb-5 mt-5">or try another way</h1>
            </form>
            <div className="m-5 ps-5 form-login">
              <div className="">
                <div className="d-grid">
                  <button className="google-btn-forgot mt-4 mb-3">
                    <Icon icon="flat-color-icons:google" width="40px" /> Sign up
                    with Google
                  </button>
                </div>
                <div className="d-grid mt-5">
                  <button
                    className="sign-btn-forgot mt-4"
                    onClick={() => handleNavigate("signup-admin")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <footer className="w-100">
            <div>
              <Logo />
              <p className="font-mulish mt-4">
                Plan and book your perfect trip with <br /> expert advice,
                travel tips for vehicle <br /> information from us
              </p>
              <p className="mt-5">
                ©2020 Vehicle Rental Center. All rights reserved
              </p>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              id="footer-socmed"
              style={{ columnGap: "1rem", paddingTop: "30px" }}
            >
              <div>
                <Icon icon={"akar-icons:twitter-fill"} width={25} height={25} />
              </div>
              <div>
                <Icon icon={"brandico:facebook"} width={25} height={25} />
              </div>
              <div>
                <Icon
                  icon={"akar-icons:instagram-fill"}
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Icon
                  icon={"akar-icons:linkedin-fill"}
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Icon icon={"akar-icons:youtube-fill"} width={25} height={25} />
              </div>
            </div>
          </footer>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
