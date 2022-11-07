import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Bike from "../../assets/img/bike.png";
import Dropdown from "react-bootstrap/Dropdown";
import { reserve } from "../../stores/actions/reservation";
// import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserById } from "../../stores/actions/user";
import { ToastContainer, toast } from "react-toastify";
import { getProductById } from "../../stores/actions/product";
import "react-toastify/dist/ReactToastify.css";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const productId = state.productId;

  const getDataProduct = () => {
    try {
      dispatch(getProductById(productId))
        .then((res) => setProduct(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  const getData = () => {
    try {
      dispatch(getUserById(userId))
        .then((res) => setUser(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const handleReservation = () => {
    const setData = {
      startDate: state.startDate,
      returnDate: state.endDate,
      quantity: state.quantity,
      userId: userId,
      productId: productId,
      amount: state.amount,
    };
    dispatch(reserve(setData))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) =>
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="my-5 d-flex payment-title align-items-center">
            <button
              className="payment-back-button"
              onClick={() => handleNavigate("vehicle-type")}
            >
              <Icon icon="akar-icons:chevron-left" />
            </button>
            <span className="ms-5">Payment</span>
          </div>
          <div className="col-md-5 me-5">
            <img src={Bike} className="img-fluid" alt="bike" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center gap-4 mb-5 mt-3">
            <span className="payment-item-name mb-2">
              {product[0]?.nameproduct}
            </span>
            <span className="payment-item-location mb-5">
              {product[0]?.location}
            </span>
            <span className="payment-prepayment mb-3">No Prepayment</span>
            <span className="payment-code-top mb-2">#FG1209878YZS</span>
            <div className="col-md-6">
              <button className="payment-copy-button-top">
                Copy booking code
              </button>
            </div>
          </div>
          <div className="col-md-5 border rounded py-3 px-5 mb-4 me-5">
            <span className="payment-quantity">
              Quantity : {state.quantity}
            </span>
          </div>
          <div className="col-md-6 border rounded py-3 px-5 mb-4 d-flex justify-content-between">
            <span className="payment-quantity">Reservation Date :</span>
            <span className="payment-date">{state.firstDate}</span>
          </div>
          <div className="col-md-5 border rounded py-3 gap-2 px-5 me-5 d-flex flex-column">
            <span className="payment-order-identity">Order Details :</span>
            <span className="payment-order">1 bike : 78000</span>
            <span className="payment-order">1 bike : 78000</span>
            <span className="mt-3 payment-total">Total : {state.amount}</span>
          </div>
          <div className="col-md-6 border rounded py-3 gap-2 px-5 d-flex flex-column justify-content-center">
            <span className="payment-order-identity">Identity :</span>
            <span className="payment-identity">
              {user[0]?.name} {user[0]?.phone}
            </span>
            <span className="payment-identity">{user[0]?.email}</span>
          </div>
          <div className="col-md-12 d-flex justify-content-between align-items-center pe-5 my-5">
            <span className="payment-payment-code">Payment code :</span>
            <div className="col-md-5 border rounded py-3 d-flex flex-row justify-content-between px-3">
              <span className="payment-code-bottom">#FG1209878YZS</span>
              <button className="px-4 payment-copy-bottom">Copy</button>
            </div>
            <div className="border col-md-4 rounded me-3 py-3 px-5">
              <Dropdown>
                <Dropdown.Toggle
                  className="payment-dropdown"
                  id="dropdown-basic"
                >
                  Select payment methods
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Cash</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Transfer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="d-grid gap-2 pe-5 mb-5">
            <button
              className="py-3 payment-finish rounded"
              size="lg"
              onClick={handleReservation}
            >
              Finish payment : <span className="text-danger">59:30</span>
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
