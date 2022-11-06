import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Reservation.css";
import defaultImage from "../../assets/images/vehicle-default.jpg";

import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function Reservation() {
  return (
    <>
      <Header />
      <div className="row mt-5 ms-lg-5 d-md-flex justify-content-md-center container-main mb-lg-5 ">
        <div className="col-lg-12 p-0 ">
          <div className="col-lg-4 mb-5 d-flex flex-row align-items-center wrapper-link-detail">
            <Link to="/vehicles" className="link-detail-0 ">
              <i className="fas fa-chevron-left fs-2"></i>
            </Link>
            <p className="ms-4 link-detail">Reservation</p>
          </div>
        </div>
        <div className="col-lg-6 p-3 d-flex justify-content-center">
          <div className="wrapper-image">
            <img src={defaultImage} alt="vehicle" className="img-vehicle" />
          </div>
        </div>
        <div className="col-lg-6 p-3 mb-3">
          <div className="wrapper-form">
            <h1 className="title-detail">
              Vehicle Name <br />
              <span className="detail-title-location">Vehicle Location</span>
            </h1>

            <p className="no-pre">No Prepayment</p>

            <div className="d-flex flex-row justify-content-between align-items-center  mt-5 mb-5 col-5">
              <button className="btn-minus-reservation">
                <i className="fas fa-minus"></i>
              </button>
              <p className="stock-reservation">10</p>
              <button className="btn-plus-reservation">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <p className="date-reservation">Reservation Date :</p>

            <DatePicker
              className="datePicker"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
            />
            <select className="datePicker">
              <option value="" disabled selected>
                Select Day
              </option>
              <option value="1">1 Day</option>
              <option value="2">2 Day</option>
              <option value="3">3 Day</option>
              <option value="4">4 Day</option>
              <option value="5">5 Day</option>
              <option value="6">6 Day</option>
              <option value="7">7 Day</option>
            </select>
          </div>
        </div>

        <div className="col-lg-10 p-0">
          <div className="btn-pay">
            <p>Pay Now : Rp.200000</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
