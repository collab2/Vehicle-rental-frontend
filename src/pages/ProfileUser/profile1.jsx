import React from "react";
import PP from "../../assets/img/photoProfile.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Header from "../../component/Header";
import { Icon } from "@iconify/react";

export default function Profile1() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="row">
          <div className="d-flex justify-content-between mt-5">
            <Button variant="light">
              <span className="profile-title">Profile</span>
            </Button>
          </div>
          <div className="col-12 d-flex flex-column gap-5 align-items-center px-5 mt-5">
            <div className="d-block profile-image-wrapper align-content-end align-items-end">
              <img src={PP} className="rounded-circle" alt="photoProfile" />
              <button className="btn btn-warning profile-edit-image">
                <Icon icon="bx:pencil" className="profile-icon" />
              </button>
            </div>
            <div className="col-md-6 d-none d-md-flex flex-column align-items-center">
              <span className="profile-name mb-4">Samantha Doe</span>
              <div className="d-flex flex-column profile-contact mb-3">
                <span>samanthadoe@mail.com</span>
                <span>+62833467823</span>
                <span>Has been active since 2013</span>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-between my-4">
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
          <span className="my-4 ps-5 profile-contacts">Contacts</span>
          <div className="col-12 px-5">
            <span className="profile-input-title">Email adress :</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
              />
            </InputGroup>
          </div>
          <div className="col-12 px-5">
            <span className="profile-input-title">Adress :</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
              />
            </InputGroup>
          </div>
          <div className="col-12 px-5">
            <span className="profile-input-title">Mobile number :</span>
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
            <span className="profile-input-title">Display name :</span>
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
            <span className="profile-input-title">DD/MM/YY :</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
              />
            </InputGroup>
          </div>
          <div className="col-12 d-flex justify-content-between my-5 mx-4">
            <button className="gold-buttons d-flex d-md-block">
              Save Change
            </button>
            <button className="black-buttons px-5 py-2 d-none d-md-block">
              Edit Password
            </button>
            <button className="silver-buttons d-none d-md-block">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
