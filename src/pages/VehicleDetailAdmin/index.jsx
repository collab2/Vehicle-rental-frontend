import React from "react";
import Header from "../../component/Header";
import Arrow from "../../assets/img/vehicle/arrow.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import VehicleDetailComponent from "../../component/VehicleDetail";

export default function VehicleDetailAdmin() {
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
          <button className="chat-admin">Add to Home Page</button>
          <button className="reservation">Edit Item</button>
        </div>
      </main>
    </>
  );
}
