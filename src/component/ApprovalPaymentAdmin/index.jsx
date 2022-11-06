import React from "react";
import "./index.css";
import bicycle from "../../assets/img/vehicle/bicycle.png";

export default function ApprovalPaymentAdmin() {
  return (
    <>
      <main className="main-approval">
        <div className="first-row">
          <div className="left-row">
            <img src={bicycle} alt="vehicle" />
          </div>
          <div className="right-row">
            <h1>Fixie - Gray Only</h1>
            <h2>Yogyakarta</h2>
            <h4>No Prepayment</h4>
            <h2>#FG1209878YZS</h2>
            <button>Copy Booking Code</button>
          </div>
        </div>
        <div className="second-row">
          <div className="left-row">
            <h3>Quantity : 2 Bikes</h3>
          </div>
          <div className="right-row">
            <h3>Reservation Date : 18 - 20 Jan 2023</h3>
          </div>
        </div>
        <div className="third-row">
          <div className="left-row">
            <h3>Order Details :</h3>
            <p>1 bike : Rp. 78.000</p>
            <p>1 bike : Rp. 78.000</p>
            <h3>Total : Rp. 156.000</h3>
          </div>
          <div className="right-row">
            <h3>Identity :</h3>
            <p>Samantha Doe (+6282345678)</p>
            <p>samantha@gmail.com</p>
          </div>
        </div>
        <div className="fourth-row">
          <h1>Payment Code :</h1>
          <div className="code">
            <h2>#FG1209878YZS</h2>
            <button>Copy</button>
          </div>
          <div className="payment-row">
            <h1>Pay With Transfer</h1>
          </div>
        </div>
      </main>
    </>
  );
}
