import React, { useEffect } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Arrow from "../../assets/img/vehicle/arrow.png";
import love from "../../assets/img/vehicle/favorite.png";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import VehicleDetailComponent from "../../component/VehicleDetail";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../stores/actions/product";

export default function VehicleDetailUser() {
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
  const handleReservation = (productId) => {
    navigate(`/reservation/${productId}`);
  };

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
          <button className="chat-admin">Chat Admin</button>
          <button className="reservation" onClick={handleReservation}>
            Reservation
          </button>
          <button className="favorite">
            <img src={love} alt="" />
            Like
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
