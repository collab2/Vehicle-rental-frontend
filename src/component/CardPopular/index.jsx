import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";

import card1 from "../../assets/img/card-1.png";
import { useSelector } from "react-redux";

export default function CardPopular(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const isAdmin = user.role;

  console.log(props.data);
  const imageProduct = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data.image1}`;

  const handleDetailVehicleUser = () => {
    navigate(`/vehicle-detail-user/${props.data.productId}`);
  };

  const handleDetailVehicleAdmin = () => {
    navigate(`/vehicle-detail-admin/${props.data.productId}`);
  };

  return (
    <>
      <div className=" col-3 card-responsive image-container">
        <Card className="border-0 me-3">
          <Card.Img
            src={props.data.image !== null ? imageProduct : card1}
            alt="Card image"
            className="rounded-image"
          />
          <Card.ImgOverlay className="d-flex image-popular">
            <div
              className="box-image"
              onClick={
                isAdmin !== "admin"
                  ? handleDetailVehicleUser
                  : handleDetailVehicleAdmin
              }
            >
              <p className="fw-bold">
                {props.data.category ? props.data.category : "-"}
              </p>
              <p>{props.data.location ? props.data.location : "-"}</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
