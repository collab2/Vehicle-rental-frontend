import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Arrow from "../../assets/img/vehicle/arrow.png";
import love from "../../assets/img/vehicle/favorite.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import VehicleDetailComponent from "../../component/VehicleDetail";

export default function VehicleDetailUser() {
  const navigate = useNavigate();

  const handleDetailType = () => {
    navigate(`/vehicle-type`);
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
        <VehicleDetailComponent />
        <div className="row-button-detail">
          <button className="chat-admin">Chat Admin</button>
          <button className="reservation">Reservation</button>
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
