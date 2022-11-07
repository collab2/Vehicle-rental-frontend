import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function ReservationList(props) {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate(`/approval-payment/${props.data.reservationId}`);
  };
  return (
    <>
      <main className="list">
        <div className="reservation-list">
          <p>Location : {props.data.location}</p>
          <p>Payment Methods : {props.data.paymentMethods}</p>
          <p>Reservation Date : {props.data.reservationDate}</p>
          <button onClick={handleReservation}>See Details</button>
        </div>
      </main>
    </>
  );
}
