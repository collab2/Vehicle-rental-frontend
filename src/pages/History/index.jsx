import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import vespa from "../../assets/img/vespa.png";
import lambo from "../../assets/img/lambo.png";

export default function History() {
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
                <option value="">Filter</option>
                <option value="">Type</option>
                <option value="">Date Added</option>
                <option value="">Favorite Product</option>
              </select>
            </form>

            <section>
              <h4
                className="title-history font-nunito"
                style={{ marginBottom: "45px", marginTop: "45px" }}
              >
                Today
              </h4>
              <div>
                <p className="text-history">
                  Please finish your payment for vespa for Vespa Rental Jogja
                </p>
                <hr />
              </div>
              <div>
                <p className="text-history">
                  Please finish your payment for vespa for Vespa Rental Jogja
                </p>
                <hr />
              </div>
            </section>

            <section style={{ marginTop: "45px" }}>
              <h4
                className="title-history font-nunito"
                style={{ marginBottom: "50px" }}
              >
                A week ago
              </h4>
              <div className="d-flex gap-4">
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
              </div>
              <div className="d-flex gap-4 mt-5">
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
              </div>
            </section>
          </div>

          <div className="col-12 col-xl-3 text-center pb-4 mt-5 mt-xl-0">
            <div style={{ borderRadius: "10px" }} className="border">
              <h4
                className="font-playfair mt-5 mb-4"
                style={{
                  fontWeight: "900",
                  fontSize: "24px",
                  color: "#393939",
                }}
              >
                New Arrival
              </h4>
              <div className="d-flex flex-column" style={{ rowGap: "3rem" }}>
                <div>
                  <img src={lambo} alt="" />
                </div>
                <div>
                  <img src={lambo} alt="" />
                </div>
              </div>

              <div className="d-flex flex-column align-items-center mt-5">
                <span
                  className="font-nunito"
                  style={{ color: "#B8BECD", fontSize: "18px" }}
                >
                  View More
                </span>
                <Icon icon={"bi:chevron-compact-down"} width={43} />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
