import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Arrow from "../../assets/img/vehicle/arrow.png";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import ApprovalPaymentAdmin from "../../component/ApprovalPaymentAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReservationById } from "../../stores/actions/reservation";

export default function ApprovalPayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const reservation = useSelector((state) => state.reservation.data);

  useEffect(() => {
    dispatch(getReservationById(id));
  }, []);

  const handleHome = () => {
    navigate(`/reservation-list`);
  };
  return (
    <>
      <Header />
      <main className="approval">
        <div className="approval-admin">
          <button onClick={handleHome}>
            <img src={Arrow} alt="Arrow" />
          </button>
          <h1>Approve Payment</h1>
        </div>
        <ApprovalPaymentAdmin data={reservation} />
        <div className="row-button-detail">
          <button className="approve-payment">Approve Payment</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
