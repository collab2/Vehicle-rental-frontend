import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
// import vespa from "../../assets/img/vespa.png";
// import lambo from "../../assets/img/lambo.png";
import ListReservation from "../../component/ListReservation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../stores/actions/product";
import vehicleDefault from "../../assets/img/vehicle-default.jpg";
import {
  getReservationByUserId,
  getReservation,
} from "../../stores/actions/reservation";

export default function History() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);
  const reservation = useSelector((state) => state.reservation);
  const dataUserReservation = reservation.dataByUser;

  useEffect(() => {
    dispatch(getProduct(2));
    dispatch(getReservationByUserId(user.data.userId));
    dispatch(getReservation());
  }, []);

  // console.log(products.allData);
  console.log(user.data.userId);
  // console.log(dataUserReservation);
  console.log(dataUserReservation);

  return (
    <>
      <Header />
      <Container>
        <div className="row mt-4" style={{ marginBottom: "55px" }}>
          <div className="col-12 col-xl-9 pe-5">
            <form action="" className="w-full row" id="search-form">
              <div className="position-relative col-10">
                <div className="position-absolute top-0 end-0 mt-3 me-4">
                  <Icon icon={"akar-icons:search"} width={25} />
                </div>
                <input
                  type="text"
                  placeholder="Search History"
                  className="font-poppins"
                />
              </div>
              <select name="filter" id="filter" className="col-2">
                <option value="">Name</option>
                <option value="">Type</option>
                <option value="">Location</option>
              </select>
            </form>

            <section
              style={{ marginTop: "45px" }}
              className="d-flex flex-column gap-5"
            >
              <ListReservation data={dataUserReservation} />

              {/* <div className="d-flex gap-4 mt-5">
                <div>
                  <img src={vespa} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span
                    className="font-nunito fw-bold"
                    style={{ color: "#393939", fontSize: "24px" }}
                  >
                    Vespa Matic
                  </span>
                  <span
                    className="font-nunito"
                    style={{ color: "#393939", fontSize: "24px" }}
                  >
                    Jan 18 to 21 2021
                  </span>
                  <span
                    className="font-nunito fw-bold mt-2"
                    style={{ color: "#393939", fontSize: "24px" }}
                  >
                    Prepayment : Rp.245.000
                  </span>
                  <span
                    className="font-nunito"
                    style={{ color: "#087E0D", fontSize: "24px" }}
                  >
                    Has been returned
                  </span>
                </div>
              </div> */}
            </section>
          </div>

          <div className="col-12 col-xl-3 text-center pb-4 mt-5 mt-xl-0">
            <div
              style={{ borderRadius: "10px" }}
              className="border pb-5 px-4 h-auto"
            >
              <h4
                className="font-playfair mt-5 mb-5"
                style={{
                  fontWeight: "900",
                  fontSize: "24px",
                  color: "#393939",
                }}
              >
                New Arrival
              </h4>
              <div className="d-flex flex-column" style={{ rowGap: "40px" }}>
                {products.allData.map((item) => (
                  <div
                    key={item.productId}
                    className="position-relative"
                    // className="mb-5"
                  >
                    {/* <p>{item.location}</p> */}
                    <div
                      className="position-absolute bottom-0 start-0 bg-white d-flex flex-column align-items-start font-nunito pt-2 pe-4"
                      style={{ borderTopRightRadius: "6px" }}
                    >
                      <span className="fw-bold">{item.nameproduct}</span>
                      <span>{item.location}</span>
                    </div>
                    <img
                      src={
                        item.image1
                          ? process.env.REACT_APP_CLOUDINARY_URL_IMAGE +
                            item.image1
                          : vehicleDefault
                      }
                      alt="Vehicle Image"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        borderRadius: "6px",
                      }}
                      // className="w-full"
                      height={350}
                      // width={200}
                    />
                  </div>
                ))}
                {/* <div>
                  <img src={lambo} alt="" />
                </div> */}
              </div>

              {/* <div className="d-flex flex-column align-items-center mt-5">
                <span
                  className="font-nunito"
                  style={{ color: "#B8BECD", fontSize: "18px" }}
                >
                  View More
                </span>
                <Icon icon={"bi:chevron-compact-down"} width={43} />
              </div> */}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
