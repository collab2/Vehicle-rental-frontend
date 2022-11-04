import React from "react";
import jeep from "../../assets/img/jeep.png";
import { Icon } from "@iconify/react";

export default function ForgotPassword() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-image py-0 px-0">
          <img src={jeep} alt="van" className="jeep vh-100 vw-100" />
          <div className="mask"></div>
          <div className="btn arrow-btn">
            <Icon icon="dashicons:arrow-left-alt2" color="white" width="40px" />
          </div>
          <div className="back-forgot">Back</div>
          <div className="text-auth">Dont worry, we got your back!</div>
          <div className="forgot-post">
            <form className="form">
              <input
                type="email"
                name="resetPassword"
                placeholder="Enter your email adress"
                className="forgot-form"
              />
            </form>
            <button className="btn btn-warning forgot-btn">Send Link</button>
            <p>
              You will receive a link to reset your password.
              <br /> If you havent received any link, click
              <a href="#">Resend Link</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
