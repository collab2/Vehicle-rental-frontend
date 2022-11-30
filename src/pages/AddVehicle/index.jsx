import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useDispatch } from "react-redux";
import { getCategory, addCategory } from "../../stores/actions/category";
import { addProduct } from "../../stores/actions/product";

import addImage from "../../assets/img/addImage.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EditVehicle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [category, setCategory] = useState({});
  const [addCategories, setAddCategories] = useState({});
  const [imagePreview1, setImagePreview1] = useState({});
  const [imagePreview2, setImagePreview2] = useState({});
  const [imagePreview3, setImagePreview3] = useState({});
  const [newImage1, setNewImage1] = useState({});
  const [newImage2, setNewImage2] = useState({});
  const [newImage3, setNewImage3] = useState({});
  const lengthImage1 = Object.keys(newImage1).length;
  const lengthImage2 = Object.keys(newImage2).length;
  const lengthImage3 = Object.keys(newImage3).length;

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

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (e.target.name === "image1") {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
      setNewImage1({ [name]: files[0] });
      setImagePreview1(URL.createObjectURL(files[0]));
    } else if (e.target.name === "image2") {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
      setNewImage2({ [name]: files[0] });
      setImagePreview2(URL.createObjectURL(files[0]));
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else if (e.target.name === "image3") {
      setNewImage3({ [name]: files[0] });
      setImagePreview3(URL.createObjectURL(files[0]));
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // console.log(form);

  // const handleAddProduct = () => {
  // e.preventDefault();
  // dispatch(addProduct(form))
  //   .then((response) => {
  //     toast.success(response.value.data.msg, {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     dispatch(getProduct());
  //   })
  //   .catch((error) => {
  //     toast.error(error.response.data.msg, {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   });
  // };

  const handleAddImage = () => {
    // e.preventDefault();
    const formData = new FormData();
    // formData.append("name", form.name);
    for (const data in form) {
      // console.log(data);
      formData.append(data, form[data]);
      console.log(formData);
    }
    // console.log(form);
    formData.append("nameproduct", "test");
    dispatch(addProduct(formData)).then(
      (res) => {
        console.log(res);
        alert("success");
        navigate("/");
      }
      // toast
      //   .success(res.value.data.msg, {
      //     position: toast.POSITION.TOP_CENTER,
      //   })
      //   .catch((err) =>
      //     toast.error(err.value.data.msg, {
      //       position: toast.POSITION.TOP_CENTER,
      //     })
      //   )
    );
  };

  const handleNav = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <Header />
      <div className="container">
        <button className="btn" onClick={() => handleNav("")}>
          <div className="h3">{"< "} Add New Item</div>{" "}
        </button>

        <div className="container">
          <div className="d-flex flex-wrap my-5 justify-content-evenly">
            <div className="col-lg-6 col-sm-12 text-center">
              <div className="text-end"></div>
              <div className="text-center">
                <label htmlFor="image1">
                  <input
                    type="file"
                    name="image1"
                    id="image1"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <img
                    src={lengthImage1 > 0 ? imagePreview1 : addImage}
                    alt=""
                    className="big-image"
                  />
                </label>
              </div>
              <div className="d-flex mt-5">
                <div className="col-6">
                  <div className="text-end"></div>
                  <div className="text-start">
                    <label htmlFor="image2">
                      <input
                        type="file"
                        name="image2"
                        id="image2"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <img
                        src={lengthImage2 > 0 ? imagePreview2 : addImage}
                        alt=""
                        className="small-image"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <label htmlFor="image3">
                    <input
                      type="file"
                      name="image3"
                      id="image3"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <img
                      src={lengthImage3 > 0 ? imagePreview3 : addImage}
                      alt=""
                      className="small-image"
                    />
                  </label>
                </div>
              </div>
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
                defaultValue={0}
                placeholder="Type the price"
                className="form-control mb-4 border-0 bg-light price-input"
                onChange={handleChange}
              />
              <label htmlFor="" className="mb-2 ms-1 h5 font-playfair fw-bold">
                Status :
              </label>
              <select
                onChange={handleChange}
                name="status"
                className="form-select mb-3 bg-light border-0 status-input"
              >
                <option selected>Select Status</option>
                <option className="selected-dropup" style={{ color: "green" }}>
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
                  <input
                    type="number"
                    className="border-0 text-center bg-light form-control"
                    name="stock"
                    defaultValue={0}
                    placeholder="Set Stock"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-between mb-5">
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
              className="btn save-item"
              onClick={() => {
                // handleAddProduct();
                handleAddImage();
              }}
            >
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
