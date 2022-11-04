import React from "react";
import { Card } from "react-bootstrap";

import card1 from "../../assets/img/card-1.png";

export default function CardPopular() {
  return (
    <>
      <div className=" col-3 card-responsive">
        <Card className="border-0 me-3">
          <Card.Img src={card1} alt="Card image" className="rounded-image" />
          <Card.ImgOverlay className="d-flex image-popular">
            <div className="box-image">
              <p className="fw-bold">Merapi</p>

              <p>Yogyakarta</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className=" col-3 card-responsive">
        <Card className="border-0 me-3">
          <Card.Img src={card1} alt="Card image" className="rounded-image" />
          <Card.ImgOverlay className="d-flex image-popular">
            <div className="box-image">
              <p className="fw-bold">Merapi</p>

              <p>Yogyakarta</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className=" col-3 card-responsive">
        <Card className="border-0 me-3">
          <Card.Img src={card1} alt="Card image" className="rounded-image" />
          <Card.ImgOverlay className="d-flex image-popular">
            <div className="box-image">
              <p className="fw-bold">Merapi</p>

              <p>Yogyakarta</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className=" col-3 card-responsive">
        <Card className="border-0 me-3">
          <Card.Img src={card1} alt="Card image" className="rounded-image" />
          <Card.ImgOverlay className="d-flex image-popular">
            <div className="box-image">
              <p className="fw-bold">Merapi</p>

              <p>Yogyakarta</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className=" col-3 card-responsive">
        <Card className="border-0 me-3">
          <Card.Img src={card1} alt="Card image" className="rounded-image" />
          <Card.ImgOverlay className="d-flex image-popular">
            <div className="box-image">
              <p className="fw-bold">Merapi</p>

              <p>Yogyakarta</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
