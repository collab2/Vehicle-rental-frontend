import React from "react";
// import authimage from "../../assets/img/authimage.png";
import "./index.css";
// import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import Logo from "../../component/Logo";
import { register } from "../../stores/actions/signup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "../../utils/axios";

export default function SignupAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  // const handleSignup = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const result = await axios.post("/auth/register", form);
  //     toast.success(result.data.msg, {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     setTimeout(() => {
  //       navigate("/signin");
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.msg, {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   }
  // };

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(register(form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          navigate("/signin-admin");
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
              <h1>Sign up</h1>
            </div>
            <form className="form-login mx-5 px-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input text-start px-5 mb-5"
                onChange={handleChangeForm}
              />
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
                className="form-input text-start px-5 mb-4"
                onChange={handleChangeForm}
              />
              <div className="d-grid">
                <button className="auth-btn" onClick={handleSignup}>
                  Sign Up
                </button>
              </div>
              <button
                className="text-start click-me mt-1"
                onClick={() => handleNavigate("forgot-password-admin")}
              >
                Forgot password?
              </button>
              <h1 className="separator pt-4 mt-4">Not Have Account?</h1>
            </form>
            <div className="mx-5 px-5 form-login">
              <div className="">
                <div className="d-grid">
                  <button
                    className="sign-btn"
                    onClick={() => handleNavigate("signin-admin")}
                  >
                    Login
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
