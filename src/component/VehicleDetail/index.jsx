import React from "react";
import "./index.css";
import bicycle from "../../assets/img/vehicle/bicycle.png";
import left from "../../assets/img/vehicle/left.png";
import right from "../../assets/img/vehicle/right.png";
import { useSelector, useDispatch } from "react-redux";
import plus from "../../assets/img/vehicle/plus.png";
import min from "../../assets/img/vehicle/min.png";

import {
  incrementCounter,
  decrementCounter,
} from "../../stores/action/counter";

export default function VehicleDetailComponent() {
  const counterData = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-detail">
        <div className="left-img">
          <img className="vehicle-img" src={bicycle} alt="bike" />
          <div className="row-vehicle-img">
            <button className="left-button">
              <img src={left} alt="left" />
            </button>
            <img className="img-detail" src={bicycle} alt="bicycle" />
            <img className="img-detail" src={bicycle} alt="bicycle" />
            <button className="left-button">
              <img src={right} alt="right" />
            </button>
          </div>
        </div>
        <div className="right-detail">
          <h1>Fixie - Gray Only</h1>
          <h2>Yogyakarta</h2>
          <p className="available">available</p>
          <p className="payment">No Prepayment</p>
          <p>Capacity : 1 person</p>
          <p>Type : Bike</p>
          <p>Reservation before : 2 PM</p>
          <h3>Rp. 78.000 / day</h3>
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
