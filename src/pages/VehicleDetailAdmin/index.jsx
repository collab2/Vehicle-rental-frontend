import React, { useEffect } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Arrow from "../../assets/img/vehicle/arrow.png";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import VehicleDetailComponent from "../../component/VehicleDetail";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../stores/actions/product";

export default function VehicleDetailAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const productState = useSelector((state) => state.product);
  const product = productState.data;

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const handleDetailType = () => {
    navigate(`/vehicle-type`);
  };

  const handleEdit = () => {
    navigate(`/edit-vehicle/${product.productId}`);
  };

  console.log(product);

  return (
    <>
      <Header />
      {productState.isLoading ? (
        <div className="vh-100 d-flex justify-content-center">
          <div className="spinner-border text-primary mt-5" role="status">
            <span className="visually-hidden" />
          </div>
        </div>
      ) : (
        <main className="Detail">
          <div className="vehicle-detail">
            <button onClick={handleDetailType}>
              <img src={Arrow} alt="Arrow" />
            </button>
            <h1>Detail</h1>
          </div>
          <VehicleDetailComponent data={product} />
          <div className="row-button-detail">
            <button className="chat-admin">Add to Home Page</button>
            <button className="reservation" onClick={handleEdit}>
              Edit Item
            </button>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
