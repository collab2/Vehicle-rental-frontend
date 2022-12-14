import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";

// import card1 from "../../assets/img/card-1.png";
import { useSelector } from "react-redux";

export default function CardPopular(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const isAdmin = user.role;

  // console.log(props.data);
  const imageProduct =
    process.env.REACT_APP_CLOUDINARY_URL_IMAGE + props.data.image1;

  const handleDetailVehicleUser = () => {
    navigate(`/vehicle-detail-user/${props.data.productId}`);
  };

  const handleDetailVehicleAdmin = () => {
    navigate(`/vehicle-detail-admin/${props.data.productId}`);
  };

  console.log("object");

  return (
    <>
      <div
        className=" col-3 card-responsive image-container"
        onClick={
          isAdmin !== "admin"
            ? handleDetailVehicleUser
            : handleDetailVehicleAdmin
        }
      >
        <Card className="border-0 me-3">
          <Card.Img
            src={
              props.data.image1
                ? imageProduct
                : require("../../assets/img/vehicle-default.jpg")
            }
            alt="Card image"
            className="rounded-image"
          />
          <Card.ImgOverlay className="d-flex image-popular">
            <div className="box-image">
              <p className="card-category">
                {props.data.category ? props.data.category : "-"}
              </p>
              <p className="card-location">
                {props.data.location ? props.data.location : "-"}
              </p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
