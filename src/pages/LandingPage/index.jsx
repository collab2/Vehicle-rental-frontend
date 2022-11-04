import React from "react";
import Header from "../../component/Header";
import Card from "react-bootstrap/Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";

import banner1 from "../../assets/img/banner-1.png";
import banner2 from "../../assets/img/banner-2.png";
import banner3 from "../../assets/img/banner-3.png";
import testimonial from "../../assets/img/testimonial-photo.png";
import stars from "../../assets/img/stars.png";

import CardPopular from "../../component/CardPopular";
import Footer from "../../component/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div>
        <Slide>
          <Card className="bg-dark border-0">
            <Card.Img src={banner1} alt="Card image" className="slide-banner" />
            <Card.ImgOverlay>
              <Card.Text className="text-slide-banner">
                LETS EXPLORE <br /> AND TRAVEL
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark border-0">
            <Card.Img src={banner2} alt="Card image" className="slide-banner" />
            <Card.ImgOverlay>
              <Card.Text className="text-slide-banner">
                UNFORGETTABLE <br /> EXPERIENCE
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark border-0">
            <Card.Img src={banner3} alt="Card image" className="slide-banner" />
            <Card.ImgOverlay>
              <Card.Text className="text-slide-banner">
                MEMORABLE <br /> MOMENTS
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Slide>

        <div className="container mt-5">
          <div className="d-flex justify-content-between my-5">
            <h1>Popular in town</h1>
            <button className="btn color-yellow">View all {">"}</button>
          </div>
          <div className="d-flex flex-nowrap my-5 overflow-auto">
            <CardPopular />
          </div>

          <div className="my-5">
            <h1>Testimonials</h1>
          </div>
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center">
              <img src={stars} alt="rating" className="w-25 my-3" />
              <p className="testimonial-text">
                ”It was the right decision to rent vehicle here, I spent less
                money and enjoy the trip. It was an amazing experience to have a
                ride for wildlife trip!”
              </p>
              <p className="fw-bold mt-3 testimonial-text">Edward Newgate</p>
              <p className="testimonial-text">Founder Circle</p>
            </div>
            <div className="col-6 text-center">
              <img src={testimonial} alt="testimonial-pict" className="w-75" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
