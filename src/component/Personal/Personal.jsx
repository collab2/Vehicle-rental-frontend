import React from "react";

export default function Personal(props) {
  return (
    <div>
      <div className="d-none d-md-flex flex-column align-items-center">
        <span className="profile-name mb-4">
          {props.data.name ? props.data.name : "No Name"}
        </span>
        <div className="d-flex flex-column profile-contact mb-3">
          <span>{props.data.email}</span>
          <span>{props.data.phone ? props.data.phone : "Phone Not Set"}</span>
        </div>
      </div>
    </div>
  );
}
