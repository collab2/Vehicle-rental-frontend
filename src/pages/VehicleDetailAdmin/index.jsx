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
  const product = useSelector((state) => state.product.data);

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
      <Footer />
    </>
  );
}
