import React from "react";
import authimage from "../../assets/img/authimage.png";
import "./index.css";
import { Icon } from "@iconify/react";

export default function Signin() {
  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col-md-6 col-lg-6 col-xl-6 col-6  px-0 mx-0 container-image">
          <div className="left-side">
            <img src={authimage} alt="van" className="authimage" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-12 right-side d-flex flex-column justify-content-start align-items-start">
          {/* <div className="mobile-display">
            <img src={authimage} alt="van" className="az" />
          </div> */}
          <div className="desktop-display">
            <div className="m-5 p-5">
              <h1>Login</h1>
            </div>
            <form className="form-login ms-5 ps-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input text-start px-5"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input text-start px-5 my-4"
              />
              <div className="d-grid">
                <button className="btn btn-warning text-black auth-btn">
                  Login
                </button>
              </div>
            </form>
            <div className="m-5 ps-5 form-login">
              <div className="pt-3">
                <button className="text-start click-me">
                  Forgot password?
                </button>
                <h1 className="separator pt-4">or try another way</h1>
                <div className="d-grid">
                  <button className="btn google-btn">
                    <Icon icon="flat-color-icons:google" width="40px" /> Sign up
                    with Google
                  </button>
                </div>
                <div className="d-grid mt-5">
                  <button className="btn btn-dark sign-btn">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
