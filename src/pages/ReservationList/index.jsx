import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Arrow from "../../assets/img/vehicle/arrow.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import "./index.css";
import ReservationList from "../../component/ReseravtionListAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReservation } from "../../stores/actions/reservation";

export default function ApprovalPayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.data);

  useEffect(() => {
    dispatch(getReservation());
  }, []);

  const handleHome = () => {
    navigate(`/`);
  };
  return (
    <>
      <Header />
      <main className="approval">
        <div className="approval-admin">
          <button onClick={handleHome}>
            <img src={Arrow} alt="Arrow" />
          </button>
          <h1>Reservation</h1>
        </div>
        <div className="row d-flex gap-5">
          <div className="main-reservation col-md-6">
            {reservation.length > 0 ? (
              reservation.map((item) => (
                <div key={item.reservationId}>
                  <ReservationList data={item} />
                </div>
              ))
            ) : (
              <div className="text-center">Data Not Found</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
