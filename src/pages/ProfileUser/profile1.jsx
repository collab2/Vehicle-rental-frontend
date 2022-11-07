import React from "react";
import PP from "../../assets/img/photoProfile.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Header from "../../component/Header";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, editUser } from "../../stores/actions/user";
import Personal from "../../component/Personal/Personal";
import { Toast, ToastContainer } from "react-bootstrap";

export default function Profile1() {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [form, setForm] = useState({});
  const user = useSelector((state) => state.user.data);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  const updateHandler = async () => {
    try {
      setIsloading(true);
      await dispatch(editUser(form, id));
    } catch (error) {
      setShowToast(true);
      setIsloading(false);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(user);
  console.log(id);
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
            <Personal data={user} />
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
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
                defaultValue={user.email}
                name="email"
                onChange={handleChangeForm}
              />
            </InputGroup>
          </div>
          <div className="col-12 px-5">
            <span className="profile-input-title">Adress :</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Address"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
                defaultValue={user.address}
                name="address"
                onChange={handleChangeForm}
              />
            </InputGroup>
          </div>
          <div className="col-12 px-5">
            <span className="profile-input-title">Mobile number :</span>
            <InputGroup className="my-3">
              <Form.Control
                placeholder="Phone"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="profile-input"
                defaultValue={user.phone}
                name="phone"
                onChange={handleChangeForm}
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
                defaultValue={user.name}
                name="name"
                onChange={handleChangeForm}
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
                defaultValue={user.birthDate}
                name="birthDate"
                onChange={handleChangeForm}
              />
            </InputGroup>
          </div>
          <div className="col-12 d-flex justify-content-between my-5 mx-4">
            {!isLoading ? (
              <button
                className="gold-buttons d-flex d-md-block"
                onClick={updateHandler}
              >
                Simpan
              </button>
            ) : (
              <div className="gold-buttons d-flex d-md-block">
                <div
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                >
                  <span className="visually-hidden" />
                </div>
              </div>
            )}
            <ToastContainer
              position="top-center"
              className="p-3 position-fixed"
            >
              <Toast
                show={showToast}
                onClose={() => {
                  setShowToast(false);
                }}
              >
                <Toast.Header>
                  <strong className="me-auto">Success</strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>Your profile is updated</Toast.Body>
              </Toast>
            </ToastContainer>
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
