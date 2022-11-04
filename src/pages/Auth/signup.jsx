import React from "react";
import authimage from "../../assets/img/authimage.png";
import "./index.css";
import { Icon } from "@iconify/react";

export default function Signup() {
  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col-6 px-0 mx-0">
          <div className="left-side">
            <img src={authimage} alt="van" className="authimage" />
          </div>
        </div>
        <div className="col-6 right-side d-flex flex-column justify-content-start align-items-start px-0 mx-0">
          <div className="m-5 p-5">
            <h1>Sign Up</h1>
          </div>
          <form className="ms-5 ps-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input text-start px-5"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input text-start px-5 my-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-input text-start px-5"
            />
          </form>
          <div className="d-grid m-5 ps-5">
            <button className="btn btn-warning text-black auth-btn">
              Sign up
            </button>
            <div className="pt-3">
              <button className="text-start click-me">Forgot password?</button>
              <h1 className="separator pt-4">or try another way</h1>
            </div>
          </div>
          <div className="d-grid m-5 ps-5">
            <button className="btn google-btn">
              <Icon icon="flat-color-icons:google" width="40px" /> Login with
              Google
            </button>
            <br />
            <button className="btn btn-dark sign-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
