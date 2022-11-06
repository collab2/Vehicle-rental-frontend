import React, { useEffect, useState } from "react";
import "./index.css";

import Header from "../../component/Header";
import Footer from "../../component/Footer";

import Bicycle from "../../assets/img/vehicle/bicycle-full.png";
import { useDispatch } from "react-redux";
import { getCategory, addCategory } from "../../stores/actions/category";
// import {
//   updateProduct,
//   deleteProduct,
//   getProductById,
// } from "../../stores/actions/product";

export default function EditVehicle() {
  const [category, setCategory] = useState({});
  const [addCategories, setAddCategories] = useState({});
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = () => {
    dispatch(getCategory())
      .then((res) => {
        setCategory(res.value.data.data);
      })
      .catch((err) => {
        alert(err.value.data.message);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleManageCatagory = (e) => {
    setAddCategories({
      ...addCategories,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    dispatch(addCategory(addCategories)).then(
      (res) => alert(res.value.data.msg),
      dispatch(getCategory())
    );
  };

  const handleUpdate = () => {
    // dispatch(updateProduct(id, data))
    //   .then((res) => alert(res.value.data.msg), dispatch(getProductById()))
    //   .catch((err) => alert(err.response.response.msg));
    console.log(form);
  };

  const handleDelete = () => {
    // dispatch(deleteProduct(id,data))
    //   .then((res) => (alert(res.value.data.msg), dispatch(getProductById())))
    //   .catch((err) => alert(err.value.response.msg));
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
            <div className="input-group text-center btn-edit-category">
              <select
                className="form-select text-center"
                name="category"
                onChange={handleChange}
              >
                <option selected>Add item to</option>
                {category.length > 0 ? (
                  category.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))
                ) : (
                  <>
                    <option value="Bicycle">Bicycle</option>
                    <option value="Cars">Cars</option>
                    <option value="Bus">Bus</option>
                  </>
                )}
              </select>
              <button
                className="input-group-text btn-add-category"
                data-bs-toggle="modal"
                data-bs-target="#manageCategory"
                style={{ padding: "0 1rem" }}
              >
                +
              </button>
            </div>
            <button
              className="btn-yellow-black btn-responsive-edit"
              onClick={handleUpdate}
            >
              Save Changes
            </button>
            <button
              className="btn-black-yellow shadow btn-responsive-edit"
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
                  name="categoryName"
                  onChange={handleManageCatagory}
                />
                <button
                  className="btn-yellow-black"
                  style={{ padding: "0.5rem 0", width: "25%" }}
                  onClick={handleAddCategory}
                >
                  Add
                </button>
              </div>
              <div className="d-flex flex-column mt-3">
                {category.length > 0 ? (
                  category.map((item, index) => (
                    <div key={index} className="row">
                      <div className="col-10">
                        <div className="selected-category">{item}</div>
                      </div>
                      <div className="col-2">
                        <button className="border-0 bg-white">&#128465;</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="h6 selected-category">Bicycle</div>
                    <div className="h6 selected-category">Cars</div>
                    <div className="h6 selected-category">Bus</div>
                  </>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-black-yellow"
                data-bs-dismiss="modal"
                style={{ padding: "0.5rem 0", width: "25%" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
