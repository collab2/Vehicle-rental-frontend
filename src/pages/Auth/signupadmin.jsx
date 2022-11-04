import React from "react";
import authimage from "../../assets/img/authimage.png";
import "./index.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../component/Logo";
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
              <h1>Sign up</h1>
            </div>
            <form className="form-login ms-5 ps-5">
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
                onClick={() => handleNavigate("forgot-password")}
              >
                Forgot password?
              </button>
              <h1 className="separator pt-4 mb-4 mt-3">or try another way</h1>
            </form>
            <div className="m-5 ps-5 form-login">
              <div className="">
                <div className="d-grid">
                  <button className="google-btn mt-4">
                    <Icon icon="flat-color-icons:google" width="40px" /> Sign up
                    with Google
                  </button>
                </div>
                <div className="d-grid mt-4">
                  <button
                    className="sign-btn"
                    onClick={() => handleNavigate("signin")}
                  >
                    Login
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
