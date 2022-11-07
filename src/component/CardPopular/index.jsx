import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import card1 from "../../assets/img/card-1.png";

export default function CardPopular(props) {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");

  const imageProduct1 = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.data.image1}`;

  const handleDetailVehicleUser = () => {
    navigate(`/vehicle-detail-user/${props.data.productId}`);
  };

  const handleDetailVehicleAdmin = () => {
    navigate(`/vehicle-detail-admin/${props.data.productId}`);
  };

  return (
    <>
      <div className=" col-3 card-responsive">
        <Card className="border-0 me-3">
          <Card.Img
            src={props.data.image !== null ? imageProduct1 : card1}
            alt="Card image"
            className="rounded-image"
          />
          <Card.ImgOverlay className="d-flex image-popular">
            <div
              className="box-image"
              onClick={
                isLogin ? handleDetailVehicleUser : handleDetailVehicleAdmin
              }
            >
              <p className="fw-bold">
                {props.data.nameProduct ? props.data.nameProduct : "-"}
              </p>
              <p>{props.data.location ? props.data.location : "-"}</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
