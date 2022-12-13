import React, { useEffect, useState } from "react";
import "./index.css";

import Header from "../../component/Header";
import Footer from "../../component/Footer";

import addImage from "../../assets/img/addImage.png";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, addCategory } from "../../stores/actions/category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  deleteProduct,
  getProductById,
  deleteProductImage,
} from "../../stores/actions/product";

export default function EditVehicle() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product?.data);
  const category = useSelector((state) => state.category.data);

  const [addCategories, setAddCategories] = useState({});
  const [form, setForm] = useState({});
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
    dispatch(getCategory());
    dispatch(getProductById(id));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange1 = (e) => {
    const { name, files } = e.target;
    setNewImage1({ [name]: files[0] });
    setImagePreview1(URL.createObjectURL(files[0]));
  };

  const handleImageChange2 = (e) => {
    const { name, files } = e.target;
    setNewImage2({ [name]: files[0] });
    setImagePreview2(URL.createObjectURL(files[0]));
  };

  const handleImageChange3 = (e) => {
    const { name, files } = e.target;
    setNewImage3({ [name]: files[0] });
    setImagePreview3(URL.createObjectURL(files[0]));
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

  const handleUpdate = () => {
    // e.preventDefault();
    dispatch(editProduct(id, form)).then(
      (res) =>
        toast.success(res.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        }),
      dispatch(getProductById(id)).catch((err) =>
        toast.error(err.value.response.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      )
    );
  };

  const handleUpdateImage = () => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("image1", newImage1.image1);
    formData.append("image2", newImage2.image2);
    formData.append("image3", newImage3.image3);
    dispatch(editProduct(id, formData)).then(
      (res) =>
        toast.success(res.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        }),
      dispatch(getProductById()).catch((err) =>
        toast.error(err.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      )
    );
  };

  const handleDelete = () => {
    const deleteConfirm = window.confirm("Do you want delete the product?");
    if (deleteConfirm) {
      dispatch(deleteProduct(id)).then(
        (res) =>
          toast.success(res.value.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          }),
        dispatch(getProductById(id)).catch((err) =>
          toast.error(err.value.response.msg, {
            position: toast.POSITION.TOP_CENTER,
          })
        )
      );
    }
  };

  const handleDeleteImage1 = (image1) => {
    const deleteConfirm = window.confirm("Do you want delete the image?");
    if (deleteConfirm) {
      dispatch(deleteProductImage(id, image1)).then(
        (res) =>
          toast.success(res.value.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          }),
        dispatch(getProductById(id)).catch((err) =>
          toast.error(err.value.response.msg, {
            position: toast.POSITION.TOP_CENTER,
          })
        )
      );
    }
  };

  const handleDeleteImage2 = (data) => {
    const deleteConfirm = window.confirm("Do you want delete the image?");
    if (deleteConfirm) {
      dispatch(deleteProductImage(id, data)).then(
        (res) =>
          toast.success(res.value.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          }),
        dispatch(getProductById(id)).catch((err) =>
          toast.error(err.value.response.msg, {
            position: toast.POSITION.TOP_CENTER,
          })
        )
      );
    }
  };

  const handleDeleteImage3 = (data, id) => {
    const deleteConfirm = window.confirm("Do you want delete the image?");
    if (deleteConfirm) {
      dispatch(deleteProductImage(id, data)).then(
        (res) =>
          toast.success(res.value.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          }),
        dispatch(getProductById(id)).catch((err) =>
          toast.error(err.value.response.msg, {
            position: toast.POSITION.TOP_CENTER,
          })
        )
      );
    }
  };

  const navigate = useNavigate();
  const productIdData = product.productId;

  const handleNavigate = (id) => {
    navigate(`/vehicle-detail-admin/${id}`);
  };

  const imageProduct1 = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${product?.image1}`;
  const imageProduct2 = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${product?.image2}`;
  const imageProduct3 = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${product?.image3}`;

  return (
    <>
      <Header />
      <div className="container">
        <button
          className="btn"
          onClick={() => handleNavigate(`${productIdData}`)}
        >
          <div className="h3">{"< "} Edit Item</div>{" "}
        </button>

        <div className="container">
          <div className="d-flex flex-wrap my-5 justify-content-evenly">
            <div className="col-lg-6 col-sm-12">
              <div className="text-end">
                <button
                  className="btn-yellow-black-delete"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteImage1(product?.image1, product?.productId);
                  }}
                >
                  X
                </button>
              </div>
              <div className="text-center">
                <label htmlFor="image1">
                  <input
                    type="file"
                    name="image1"
                    id="image1"
                    style={{ display: "none" }}
                    onChange={handleImageChange1}
                  />
                  <img
                    src={
                      lengthImage1 > 0
                        ? imagePreview1
                        : product?.image1 !== null
                        ? imageProduct1
                        : addImage
                    }
                    alt=""
                    className="big-image"
                  />
                </label>
              </div>
              <div className="d-flex mt-5">
                <div className="col-6">
                  <div className="text-end">
                    <button
                      className="btn-yellow-black-delete"
                      onClick={() => {
                        handleDeleteImage2(product?.image2, product?.productId);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <div className="text-start">
                    <label htmlFor="image2">
                      <input
                        type="file"
                        name="image2"
                        id="image2"
                        style={{ display: "none" }}
                        onChange={handleImageChange2}
                      />
                      <img
                        src={
                          lengthImage2 > 0
                            ? imagePreview2
                            : product?.image2 !== null
                            ? imageProduct2
                            : addImage
                        }
                        alt=""
                        className="small-image"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <button
                    className="btn-yellow-black-delete"
                    // onClick={() => {
                    //   handleDeleteImage3(product?.image3);
                    // }}
                    onClick={() => {
                      handleDeleteImage3(product?.image3, product?.productId);
                    }}
                  >
                    X
                  </button>
                  <label htmlFor="image3">
                    <input
                      type="file"
                      name="image3"
                      id="image3"
                      style={{ display: "none" }}
                      onChange={handleImageChange3}
                    />
                    <img
                      src={
                        lengthImage3 > 0
                          ? imagePreview3
                          : product?.image3 !== null
                          ? imageProduct3
                          : addImage
                      }
                      alt=""
                      className="small-image"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Form Edit */}
            <div className="col-lg-5 col-sm-12 mt-5 ms-1">
              <input
                type="text"
                name="nameProduct"
                placeholder={
                  product?.nameproduct ? product?.nameproduct : "Name Vehicle"
                }
                className="form-control mb-4 border-0 border-bottom"
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder={product?.location ? product?.location : "Location"}
                className="form-control mb-4 border-0 border-bottom"
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                placeholder={
                  product?.description ? product?.description : "Description"
                }
                className="form-control mb-4 border-0 border-bottom"
                onChange={handleChange}
              />
              <label htmlFor="" className="mb-2 h5 font-playfair fw-bold">
                Price :
              </label>
              <input
                type="number"
                name="price"
                placeholder={product?.price ? product?.price : "Set Price"}
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
                <option selected>
                  {product?.status ? product?.status : "Set Status"}
                </option>
                <option value="Available">Available</option>
                <option value="Full Booked">Full Booked</option>
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
                    placeholder={product?.stock ? product?.stock : "Set Stock"}
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
                <option selected>
                  {product?.category
                    ? `Added to ${product?.category}`
                    : "Add Category"}
                </option>
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
              //onClick handleUpdate and handleUpdateImage
              onClick={() => {
                handleUpdate();
                handleUpdateImage();
              }}
            >
              Save Changes
            </button>
            <ToastContainer />
            <button
              className="btn-black-yellow shadow btn-responsive-edit"
              onClick={handleDelete}
            >
              Delete
            </button>
            <ToastContainer />
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
                <ToastContainer />
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
