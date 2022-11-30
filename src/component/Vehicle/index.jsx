import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Vehicle(props) {
  const user = useSelector((state) => state.signin);

  const navigate = useNavigate();

  const handleDetail = () => {
    if (user.data?.role === "user") {
      navigate(`/vehicle-detail-user/${props.data.productId}`);
    } else {
      navigate(`/vehicle-detail-admin/${props.data.productId}`);
    }
  };
  return (
    <>
      <div className="vehicle-bar">
        <div className="vehicle-type">
          <img
            style={{ objectFit: "cover", objectPosition: "center" }}
            src={
              props.data.image1
                ? `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data.image1}`
                : require("../../assets/img/vehicle-default.jpg")
            }
            alt="van"
            onClick={handleDetail}
          />
          <div className="vehicle-desc">
            <p>{props.data.category ? props.data.category : "-"}</p>
            <p>{props.data.location ? props.data.location : "-"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
