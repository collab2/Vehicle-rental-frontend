import React from "react";
import authimage from "../../assets/img/authimage.png";
import "./index.css";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../component/Logo";
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
              <h1>Reset Password</h1>
              <h3 className="mt-1">
                Change your password to reactivate <br /> your account
              </h3>
            </div>
            <form className="form-login ms-5 ps-5">
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
              <h1 className="separator pt-4 mb-5 mt-5">or try another way</h1>
            </form>
            <div className="m-5 ps-5 form-login">
              <div className="">
                <div className="d-grid">
                  <button className="google-btn mt-2">
                    <Icon icon="flat-color-icons:google" width="40px" /> Sign up
                    with Google
                  </button>
                </div>
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
