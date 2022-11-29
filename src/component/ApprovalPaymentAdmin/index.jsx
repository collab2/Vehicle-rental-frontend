import React from "react";
import "./index.css";
import Card from "react-bootstrap/Card";
import { Slide } from "react-slideshow-image";

export default function ApprovalPaymentAdmin(props) {
  return (
    <>
      <main className="main-approval">
        <div className="first-row">
          <div className="left-row">
            <Slide>
              <Card.Img
                className="vehicle-img"
                src={
                  props.data.image1
                    ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data.image1}`
                    : require("../../assets/img/vehicle-default.jpg")
                }
                alt="bike"
              />
              <Card.Img
                className="vehicle-img"
                src={
                  props.data.image2
                    ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data.image2}`
                    : require("../../assets/img/vehicle-default.jpg")
                }
                alt="bike"
              />
              <Card.Img
                className="vehicle-img"
                src={
                  props.data.image3
                    ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data.image3}`
                    : require("../../assets/img/vehicle-default.jpg")
                }
                alt="bike"
              />
            </Slide>
          </div>
          <div className="right-row">
            <h1>{props.data.nameproduct}</h1>
            <h2>{props.data.location}</h2>
            <h4>No Prepayment</h4>
            <h2>#FG1209878YZS</h2>
            <button>Copy Booking Code</button>
          </div>
        </div>
        <div className="second-row">
          <div className="left-row">
            <h3>Quantity : {props.data.quantity}</h3>
          </div>
          <div className="right-row">
            <h3>Reservation Date : {props.data.reservationDate}</h3>
          </div>
        </div>
        <div className="third-row">
          <div className="left-row">
            <h3>Order Details :</h3>
            <p>1 bike : Rp. 78.000</p>
            <p>1 bike : Rp. 78.000</p>
            <h3>Total : Rp. {props.data.amount}</h3>
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
            <h1>{props.data.paymentMethods}</h1>
          </div>
        </div>
      </main>
    </>
  );
}
