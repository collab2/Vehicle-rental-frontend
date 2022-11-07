import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import plus from "../../assets/img/vehicle/plus.png";
import min from "../../assets/img/vehicle/min.png";
import Card from "react-bootstrap/Card";
import { Slide } from "react-slideshow-image";

import {
  incrementCounter,
  decrementCounter,
} from "../../stores/action/counter";
// import { Card } from "react-bootstrap";

export default function VehicleDetailComponent(props) {
  const counterData = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-detail">
        <div className="left-img">
          <Slide>
            <Card.Img
              className="vehicle-img"
              src={
                props.data?.image1
                  ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data?.image1}`
                  : require("../../assets/images/vehicle-default.jpg")
              }
              alt="bike"
            />
            <Card.Img
              className="vehicle-img"
              src={
                props.data?.image2
                  ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data?.image2}`
                  : require("../../assets/images/vehicle-default.jpg")
              }
              alt="bike"
            />
            <Card.Img
              className="vehicle-img"
              src={
                props.data?.image3
                  ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data?.image3}`
                  : require("../../assets/images/vehicle-default.jpg")
              }
              alt="bike"
            />
          </Slide>
        </div>
        <div className="right-detail">
          <h1>{props.data?.nameproduct}</h1>
          <h2>{props.data?.location}</h2>
          <p className="available">{props.data?.status}</p>
          <p className="payment">No Prepayment</p>
          <p>Capacity : {props.data?.capacity}</p>
          <p>Type : {props.data?.category}</p>
          <p>Reservation before : 2 PM</p>
          <h3>Rp. {props.data?.price}/ day</h3>
          <hr />
          <div className="counter">
            <button
              className="btn-min"
              onClick={() => dispatch(decrementCounter())}
            >
              <img src={min} alt="" />
            </button>
            <h3>{counterData.count}</h3>
            <button
              className="btn-plus"
              onClick={() => dispatch(incrementCounter(1))}
            >
              <img src={plus} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
