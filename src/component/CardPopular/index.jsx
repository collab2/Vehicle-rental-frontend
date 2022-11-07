import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import card1 from "../../assets/img/card-1.png";

export default function CardPopular(props) {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");

  const imageProduct1 = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${props.image}`;

  const handleDetailVehicleUser = () => {
    navigate(`/vehicle-detail-user/${props.id}`);
  };

  const handleDetailVehicleAdmin = () => {
    navigate(`/vehicle-detail-admin/${props.id}`);
  };

  return (
    <>
      <div className=" col-3 card-responsive">
        <Card className="border-0 me-3">
          <Card.Img
            src={props.image !== null ? imageProduct1 : card1}
            alt="Card image"
            className="rounded-image"
          />
          <Card.ImgOverlay className="d-flex image-popular">
            <div
              className="box-image"
              onClick={
                isLogin ? handleDetailVehicleAdmin : handleDetailVehicleUser
              }
            >
              <p className="fw-bold">{props.name ? props.name : "-"}</p>
              <p>{props.location ? props.location : "-"}</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
