import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Arrow from "../../assets/img/vehicle/arrow.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import "./index.css";
import ApprovalPaymentAdmin from "../../component/ApprovalPaymentAdmin";

export default function ApprovalPayment() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/`);
  };
  return (
    <>
      <Header />
      <main className="approval">
        <div className="approval-admin">
          <button onClick={handleHome}>
            <img src={Arrow} alt="Arrow" />
          </button>
          <h1>Approve Payment</h1>
        </div>
        <ApprovalPaymentAdmin />
        <div className="row-button-detail">
          <button className="approve-payment">Approve Payment</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
