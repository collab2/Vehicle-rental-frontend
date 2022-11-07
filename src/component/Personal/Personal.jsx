import React from "react";

export default function Personal(props) {
  return (
    <div>
      <div className="col-md-6 d-none d-md-flex flex-column align-items-center">
        <span className="profile-name mb-4">{props.data.name}</span>
        <div className="d-flex flex-column profile-contact mb-3">
          <span>{props.data.email}</span>
          <span>{props.data.phone}</span>
          <span>Has been active since 2013</span>
        </div>
      </div>
    </div>
  );
}
