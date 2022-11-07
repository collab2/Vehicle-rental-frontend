import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useDispatch } from "react-redux";
import { getCategory, addCategory } from "../../stores/actions/category";
import { addProduct } from "../../stores/actions/product";
import Camera from "../../assets/img/camera.png";
import SmallCamera from "../../assets/img/smallcamera.png";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditVehicle() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [category, setCategory] = useState({});
  const [addCategories, setAddCategories] = useState({});

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

  const handleManageCatagory = (e) => {
    setAddCategories({
      ...addCategories,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    dispatch(addCategory(addCategories)).then(
      (res) =>
        toast.success(res.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        }),
      dispatch(getCategory()).catch((err) =>
        toast.error(err.value.response.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      )
    );
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [counter, setCounter] = useState(0);

  const increment = (data) => {
    setCounter(counter + data);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
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
              <label htmlFor="image" className="w-100">
                <input
                  type="file"
                  name="image"
                  id="image"
                  style={{ display: "none" }}
                />
                <div className="case w-100 d-flex flex-column align-items-center justify-content-center">
                  <img src={Camera} alt="camera" />
                  <h1 className="mt-3">Click to add image</h1>
                </div>
                <div className="d-flex mt-4">
                  <div className="col-6 case2 d-flex flex-column align-items-center justify-content-center">
                    <img src={SmallCamera} alt="camera" />
                    <h1 className="mt-1">Click to add image</h1>
                  </div>
                  <div className="col-6 case3 ms-2 d-flex flex-column align-items-center justify-content-center">
                    <Icon icon="entypo:plus" color="#B8BECD" width="54px" />
                    <h1>Add more</h1>
                  </div>
                </div>
              </label>
            </div>

            <div className="col-lg-4 col-sm-12 ms-2">
              <input
                type="text"
                name="nameProduct"
                placeholder="Name (max up to 50 words)"
                maxLength="50"
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
                placeholder="Description (max up to 150 words)"
                maxLength="150"
                className="form-control mb-4 border-0 border-bottom"
                onChange={handleChange}
              />
              <label htmlFor="" className="mb-2 ms-1 h5 font-playfair fw-bold">
                Price :
              </label>
              <input
                type="number"
                name="price"
                placeholder="Type the price"
                className="form-control mb-4 border-0 bg-light price-input"
                onChange={handleChange}
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
                  onChange={handleChange}
                >
                  Available
                </option>
                <option
                  value="fullBooked"
                  style={{ color: "red" }}
                  onChange={handleChange}
                >
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
                    name="stock"
                    className="btn-yellow-plus"
                    onClick={() => increment(1)}
                    onChange={handleChange}
                  >
                    +
                  </button>
                  <p className="mx-5 fw-bold mt-3 mx-3">{counter}</p>
                  <button
                    name="stock"
                    className="btn-grey-minus"
                    onClick={decrement}
                    disabled={counter === 0 ? true : false}
                    onChange={handleChange}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-5">
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
            <button className="btn save-item me-5" onClick={handleAddProduct}>
              Save Item
            </button>
          </div>
        </div>
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
                    <ToastContainer />
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
                          <button className="border-0 bg-white">
                            &#128465;
                          </button>
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
      </div>
      <Footer />
    </>
  );
}
