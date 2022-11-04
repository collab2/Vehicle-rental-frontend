import React, { useState } from "react";
import "./index.css";

import Header from "../../component/Header";
import ManageCatagory from "../../component/ManageCategory";

import Bicycle from "../../assets/img/vehicle/bicycle-full.png";

export default function EditVehicle() {
  const catagory = [
    { name: "Bike", value: "bike" },
    { name: "Car", value: "car" },
    { name: "Bus", value: "bus" },
  ];

  const [vehicle, setVehicle] = useState({});
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleManageCatagory = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateCatageory = (e) => {
    e.preventDefault();
    console.log(vehicle);
  };

  const handleUpdate = () => {
    console.log(form);
  };

  const handleDelete = () => {
    console.log(form);
  };

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
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="form-control mb-4 border-0 border-bottom"
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="form-control mb-4 border-0 border-bottom"
                onChange={handleChange}
              />
              <label htmlFor="" className="mb-2 h5 font-playfair fw-bold">
                Price :
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control mb-4 border-0 bg-light"
                onChange={handleChange}
              />
              <label htmlFor="" className="mb-2 h5 font-playfair fw-bold">
                Status :
              </label>
              <select
                className="form-select mb-3 bg-light border-0"
                name="status"
                onChange={handleChange}
              >
                <option selected>Availability Status</option>
                <option value="available">Available</option>
                <option value="fullBooked">Full Booked</option>
              </select>
              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="" className="my-3 h5 font-playfair fw-bold">
                  Stock :{" "}
                </label>
                <div className="d-flex align-items-center justify-content-evenly">
                  <input
                    type="number"
                    className="border-0 text-center bg-light form-control"
                    name="stock"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between flex-wrap mb-5">
            <div className="input-group" style={{ width: "40%" }}>
              <select
                className="form-select btn btn-black-yellow"
                name="category"
                onChange={handleChange}
              >
                <option selected>Add item to</option>
                {catagory.map((item, index) => {
                  return <ManageCatagory key={index} name={item.name} />;
                })}
              </select>
              <button
                className="btn input-group-text btn-yellow-black"
                data-bs-toggle="modal"
                data-bs-target="#manageCategory"
                style={{ padding: "0 1rem" }}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-yellow-black w-25"
              onClick={handleUpdate}
            >
              Save Changes
            </button>
            <button
              className="btn btn-black-yellow shadow w-25"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Manage Category Models */}
      <div
        className="modal fade"
        id="manageCategory"
        tabIndex="-1"
        aria-labelledby="manageCategoryLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="manageCategoryLabel">
                Manage Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name Category"
                  name="namecategory"
                  onChange={handleManageCatagory}
                />
                <button
                  className="btn btn-yellow-black"
                  style={{ padding: "0.5rem 0", width: "25%" }}
                  onClick={handleUpdateCatageory}
                >
                  Add
                </button>
              </div>
              <div className="d-flex flex-column mt-3">
                {catagory.map((item, index) => {
                  return (
                    <div className="col-6" key={index}>
                      <ManageCatagory name={item.name} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-black-yellow"
                data-bs-dismiss="modal"
                style={{ padding: "0.5rem 0", width: "25%" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
