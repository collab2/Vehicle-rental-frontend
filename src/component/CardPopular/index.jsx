import React from "react";
import { Card } from "react-bootstrap";

import card1 from "../../assets/img/card-1.png";

export default function CardPopular() {
  return (
    <>
      <Card className="w-25 border-0 me-3">
        <Card.Img src={card1} alt="Card image" className="rounded-image" />
        <Card.ImgOverlay className="d-flex image-popular">
          <div className="box-image">
            <span className="fw-bold">Merapi</span>
            <br />
            <span>Yogyakarta</span>
          </div>
        </Card.ImgOverlay>
      </Card>

      <Card className="w-25 border-0 me-3">
        <Card.Img src={card1} alt="Card image" className="rounded-image" />
        <Card.ImgOverlay className="d-flex image-popular">
          <div className="box-image">
            <span className="fw-bold">Merapi</span>
            <br />
            <span>Yogyakarta</span>
          </div>
        </Card.ImgOverlay>
      </Card>

      <Card className="w-25 border-0 me-3">
        <Card.Img src={card1} alt="Card image" className="rounded-image" />
        <Card.ImgOverlay className="d-flex image-popular">
          <div className="box-image">
            <span className="fw-bold">Merapi</span>
            <br />
            <span>Yogyakarta</span>
          </div>
        </Card.ImgOverlay>
      </Card>

      <Card className="w-25 border-0">
        <Card.Img src={card1} alt="Card image" className="rounded-image" />
        <Card.ImgOverlay className="d-flex image-popular">
          <div className="box-image">
            <span className="fw-bold">Merapi</span>
            <br />
            <span>Yogyakarta</span>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
