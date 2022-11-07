import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Vehicle(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/vehicle-detail-user/${props.data.productId}`);
  };
  return (
    <>
      <div className="vehicle-bar">
        <div className="vehicle-type">
          <img
            src={
              props.data.image1
                ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data.image1}`
                : require("../../assets/images/vehicle-default.jpg")
            }
            alt="van"
            onClick={handleDetail}
          />
          <div className="vehicle-desc">
            <p>{props.data.category}</p>
            <p>{props.data.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
