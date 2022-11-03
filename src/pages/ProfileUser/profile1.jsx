import React from "react";
import PP from "../../assets/img/photoProfile.png";

export default function Profile1() {
  return (
    <div className="container-fluit mx-5">
      <div className="row">
        <div className="d-flex justify-content-between">
          <span>Update Profile</span>
          <div className="d-flex gap-3">
            <button type="btn" className="btn btn-primary">
              Save Change
            </button>
            <button type="btn" className="btn btn-primary">
              Cancel
            </button>
          </div>
        </div>
        <div className="col-7 d-flex gap-3">
          <img src={PP} alt="photoProfile" />
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
