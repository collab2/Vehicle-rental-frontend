import React from "react";
import "./index.css";

import Header from "../../component/Header";

import Bicycle from "../../assets/img/vehicle/bicycle-full.png";

export default function EditVehicle() {
  return (
    <>
      <Header />
      <div className="container">
        <button className="btn">
          <div className="h3">{"< "} Edit Item</div>{" "}
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
                <img src={Bicycle} className="big-image" />
              </label>
              <div className="d-flex mt-4">
                <div className="col-6">
                  <img src={Bicycle} alt="" className="small-image" />
                </div>
                <div className="col-6">
                  <img src={Bicycle} alt="" className="small-image" />
                </div>
              </div>
            </div>

            {/* Form Edit */}
            <div className="col-lg-6 col-sm-12 mt-5">
              <input
                type="text"
                name="nameproduct"
                placeholder="Name Vehicle"
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
                placeholder="Description"
                className="form-control mb-4 border-0 border-bottom"
              />
              <label htmlFor="" className="mb-2 h5 font-playfair fw-bold">
                Price :
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control mb-4 border-0 bg-light"
              />
              <label htmlFor="" className="mb-2 h5 font-playfair fw-bold">
                Status :
              </label>
              <select className="form-select mb-3 bg-light border-0">
                <option selected>Availability Status</option>
                <option value="available" className="selected-dropup">
                  Available
                </option>
                <option value="fullBooked">Full Booked</option>
              </select>
              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="" className="mb-2 h5 font-playfair fw-bold">
                  Stock :{" "}
                </label>
                <div className="d-flex align-items-center justify-content-evenly">
                  <button className="btn-grey-minus">-</button>
                  <p className="mx-5 fw-bold mt-3 mx-3">2</p>
                  <button className="btn-yellow-plus">+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-5">
            <button
              type="button"
              className="btn btn-black-yellow dropdown-toggle w-25"
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

            <button className="btn btn-yellow-black w-25">Save Changes</button>
            <button className="btn btn-black-yellow shadow w-25">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
