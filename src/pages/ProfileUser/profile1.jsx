import React from "react";
import PP from "../../assets/img/photoProfile.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Header from "../../component/Header";

export default function Profile1() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="row">
          <div className="d-flex justify-content-between mt-5">
            <span className="profile-title">Update Profile</span>
            <div className="d-flex gap-3">
              <button type="btn" className="gold-buttons">
                Save Change
              </button>
              <button type="btn" className="silver-buttons">
                Cancel
              </button>
            </div>
          </div>
          <div className="col-7 d-flex gap-5 align-items-center px-5 mt-5">
            <img src={PP} className="rounded-circle" alt="photoProfile" />
            <div className="d-flex flex-column">
              <span className="profile-name mb-4">Samantha Doe</span>
              <div className="d-flex flex-column profile-contact mb-4">
                <span>samanthadoe@mail.com</span>
                <span>+62833467823</span>
                <span>Has been active since 2013</span>
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex gap-5 justify-content-center mt-5 mb-5">
            <button className="gold-buttons px-5 py-2">Edit photo</button>
            <button className="black-buttons px-5 py-2">Edit Password</button>
          </div>
          <span className="my-4 ps-5 profile-contacts">Contacts</span>
          <div className="col-6 px-5">
            <span className="profile-input-title">Email adress</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
              />
            </InputGroup>
          </div>
          <div className="col-6 px-5">
            <span className="profile-input-title">Adress</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
              />
            </InputGroup>
          </div>
          <span className="my-4 ps-5 profile-contacts">Identity</span>
          <div className="col-6 px-5">
            <span className="profile-input-title">Display name</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
              />
            </InputGroup>
          </div>
          <div className="col-6 px-5">
            <span className="profile-input-title">DD/MM/YY</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
              />
            </InputGroup>
          </div>
          <div className="d-grid gap-2">
            <Button size="lg" className="my-5 profile-block-button">
              Log out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
