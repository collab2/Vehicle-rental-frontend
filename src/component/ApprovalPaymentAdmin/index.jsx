import React from "react";
import "./index.css";
import bicycle from "../../assets/img/vehicle/bicycle.png";

export default function ApprovalPaymentAdmin() {
  return (
    <>
      <main className="main-approval">
        <div className="left-approval">
          <div className="left-approval-img">
            <img src={bicycle} alt="vehicle" />
          </div>
          <div className="left-details">
            <h1>Order Details :</h1>
            <p>Quantity : 2 bikes</p>
            <p>Price : Rp.78.000</p>
            <hr />
            <p>Total : Rp.156.000</p>
          </div>
        </div>
        <div className="right-approval">
          <div className="right-approval-desc">
            <h1>Fixie - Gray Only</h1>
            <h2>Yogyakarta</h2>
            <p>No Prepayment</p>
            <h2>#FG1209878YZS</h2>
            <button>Copy Booking Code</button>
          </div>
          <div className="reservation-date">
            <h1>Reservation Date : Jan 18 - 20 2023</h1>
          </div>
          <div className="right-details">
            <h1>Identity :</h1>
            <p>Samantha Doe (+62808080808)</p>
            <p>samantha@gmail.com</p>
          </div>
        </div>
      </main>
      <div className="payment-row">
        <h1>Payment Code :</h1>
        <div className="code">
          <h2>#FG1209878YZS</h2>
          <button>copy</button>
        </div>
        <div className="transfer-row">Pay With Transfer</div>
      </div>
    </>
  );
}
