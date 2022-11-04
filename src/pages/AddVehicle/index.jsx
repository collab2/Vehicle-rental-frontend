import React from "react";
import "./index.css";
import { useState } from "react";
import Header from "../../component/Header";
import Camera from "../../assets/img/camera.png";
import SmallCamera from "../../assets/img/smallcamera.png";
import { Icon } from "@iconify/react";

export default function EditVehicle() {
  const [counter, setCounter] = useState(0);

  const increment = (data) => {
    setCounter(counter + data);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Header />
      <div className="container">
        <button className="btn">
          <div className="h3">{"< "} Add New Item</div>{" "}
        </button>

        <div className="container">
          <div className="d-flex flex-wrap my-5 justify-content-evenly">
            <div className="col-lg-6 col-sm-12 text-center">
              <label htmlFor="image">
                <input
                  type="file"
                  name="image"
                  id="image"
                  style={{ display: "none" }}
                />
                <div className="case d-flex flex-column align-items-center justify-content-center">
                  <img src={Camera} alt="camera" />
                  <h1 className="mt-3">Click to add image</h1>
                </div>
                <div className="d-flex mt-4">
                  <div className="col-6 case2 d-flex flex-column align-items-center justify-content-center">
                    <img src={SmallCamera} alt="camera" />
                    <h1 className="mt-1">Click to add image</h1>
                  </div>
                  <div className="col-6 case3 ms-4 d-flex flex-column align-items-center justify-content-center">
                    <Icon icon="entypo:plus" color="#B8BECD" width="54px" />
                    <h1>Add more</h1>
                  </div>
                </div>
              </label>
            </div>

            <div className="col-lg-4 col-sm-12 ms-2">
              <input
                type="text"
                name="nameproduct"
                placeholder="Name (max up to 50 words)"
                maxLength="50"
                className="form-control mb-4 border-0 border-bottom"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="form-control mb-4 border-0 border-bottom"
              />
              <input
                type="text"
                name="description"
                placeholder="Description (max up to 150 words)"
                maxLength="150"
                className="form-control mb-4 border-0 border-bottom"
              />
              <label htmlFor="" className="mb-2 ms-1 h5 font-playfair fw-bold">
                Price :
              </label>
              <input
                type="number"
                name="price"
                placeholder="Type the price"
                className="form-control mb-4 border-0 bg-light price-input"
              />
              <label htmlFor="" className="mb-2 ms-1 h5 font-playfair fw-bold">
                Status :
              </label>
              <select className="form-select mb-3 bg-light border-0 status-input">
                <option selected>Select Status</option>
                <option
                  value="available"
                  className="selected-dropup"
                  style={{ color: "green" }}
                >
                  Available
                </option>
                <option value="fullBooked" style={{ color: "red" }}>
                  Full Booked
                </option>
              </select>
              <div className="d-flex align-items-center justify-content-between mt-5">
                <label
                  htmlFor=""
                  className="mb-2 ms-1 h5 font-playfair fw-bold"
                >
                  Stock :{" "}
                </label>
                <div className="d-flex align-items-center justify-content-evenly">
                  <button
                    className="btn-yellow-plus"
                    onClick={() => increment(1)}
                  >
                    +
                  </button>
                  <p className="mx-5 fw-bold mt-3 mx-3">{counter}</p>
                  <button
                    className="btn-grey-minus"
                    onClick={decrement}
                    disabled={counter === 0 ? true : false}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-5">
            <button
              type="button"
              className="btn add-item dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Add item to
            </button>
            <ul className="dropdown-menu mx-2">
              <li>
                <option value="car" className="ps-2 selected-dropup">
                  Cars
                </option>
              </li>
              <li>
                <option value="bike" className="ps-2 selected-dropup">
                  Bike
                </option>
              </li>
              <li>
                <option value="motorbike" className="ps-2 selected-dropup">
                  Motorbike
                </option>
              </li>
              <li>
                <option value="homepage " className="ps-2 pe-5 selected-dropup">
                  Homepage {"(Popular)"}
                </option>
              </li>
            </ul>
            <button className="btn btn-yellow-black-add me-5">Save Item</button>
          </div>
        </div>
      </div>
    </>
  );
}
