import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../stores/actions/product";
import { useEffect } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState({});
  const productState = useSelector((state) => state.product);

  useEffect(() => {
    getDataProduct();
  }, []);

  const handleNav = (path) => {
    navigate(`/${path}`);
  };

  const getDataProduct = () => {
    dispatch(getProduct(50)).then((res) => {
      setProducts(res.value.data.data);
    });
  };

  return (
    <>
      <Header />
      <div>
        <Slide>
          <Card className="bg-dark border-0">
            <Card.Img src={banner1} alt="Card image" className="slide-banner" />
            <Card.ImgOverlay>
              <Card.Text className="text-slide-banner">
                LETS EXPLORE AND <br /> TRAVEL
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

        <div className="container my-5">
          <div className="container-divider-landing">
            <div className="d-flex justify-content-between my-5 title-landing">
              <h1>Popular in town</h1>
              <button
                className="btn color-yellow"
                onClick={() => handleNav("vehicle-type")}
              >
                View all {">"}
              </button>
            </div>
            {productState.isLoading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary mt-5" role="status">
                  <span className="visually-hidden" />
                </div>
              </div>
            ) : (
              <div className="d-flex flex-nowrap my-5 overflow-auto">
                {products.length > 0 ? (
                  products.map((item, index) => (
                    <CardPopular key={index} data={item} />
                  ))
                ) : (
                  <h6>Something Popular Coming ...</h6>
                )}
              </div>
            )}
          </div>

          {/* Testimonial */}
          <div className="container-divider-landing">
            <div className="my-5 font-playfair title-landing">
              <h1>Testimonials</h1>
            </div>
            <div className="row my-5">
              <div className="col-6 d-flex flex-column justify-content-center">
                <img src={stars} alt="rating" className="w-25 my-3" />
                <p className="testimonial-text">
                  ”It was the right decision to rent vehicle here, I spent less
                  money and enjoy the trip. It was an amazing experience to have
                  a ride for wildlife trip!”
                </p>
                <p className="fw-bold mt-3 testimonial-text">Edward Newgate</p>
                <p className="fw-light">Founder Circle</p>
              </div>
              <div className="col-6 text-center mb-5">
                <img
                  src={testimonial}
                  alt="testimonial-pict"
                  className="w-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
