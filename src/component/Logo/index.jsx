import React from "react";
import logo from "../../assets/img/logo.png";
import "./index.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="" className="img-fluid" />
    </div>
  );
}
