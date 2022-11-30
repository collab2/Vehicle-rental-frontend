import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import { reserve } from "../../stores/actions/reservation";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserById } from "../../stores/actions/user";
import { ToastContainer, toast } from "react-toastify";
import { getProductById } from "../../stores/actions/product";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(useLocation());
  console.log("state");
  console.log(state);
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const productId = state?.productId;
  const imageProduct = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${product[0]?.image1}`;
  const locationProduct = product[0]?.location;
  console.log(locationProduct);
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
      location: locationProduct,
      startDate: moment(state?.startDate, "YYYY-MM-DD"),
      returnDate: moment(state?.returnDate, "YYYY-MM-DD"),
      quantity: state?.quantity,
      userId: userId,
      productId: productId,
      amount: state?.amount,
    };
    dispatch(reserve(setData))
      .then((response) => {
        console.log(response.action.payload.data.data.redirectUrl.redirect_url);
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          navigate("/");
          window.open(
            response.action.payload.data.data.redirectUrl.redirect_url,
            "_blank"
          );
        }, [1000]);
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
            <img
              src={imageProduct}
              className=""
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "15px",
              }}
              alt="bike"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center gap-4 mb-5 mt-3">
            <span className="payment-item-name mb-2">
              {product[0]?.nameproduct}
            </span>
            <span className="payment-item-location mb-5">
              {product[0]?.location}
            </span>
            <span className="payment-prepayment mb-3">No Prepayment</span>
          </div>

          <div className="row mt-5 px-4">
            <div className="col-md-5 border rounded px-5 py-4 mb-4 me-5">
              <span className="payment-quantity">
                Quantity : {state?.quantity}
              </span>
            </div>
            <div className="col-md-6 border rounded py-4 px-5 mb-4 d-flex align-items-center">
              <span className="payment-quantity">
                Reservation Date : {state?.startDate} - {state?.returnDate}
              </span>
              <span className="payment-date">{state?.firstDate}</span>
            </div>
          </div>

          <div className="row mb-5 px-4">
            <div className="col-md-5 border rounded gap-2 p-5 me-5 d-flex flex-column">
              <span className="payment-order-identity">Order Details :</span>
              <span className="payment-order">
                {state?.quantity} {product[0]?.nameproduct} : Rp.{" "}
                {Number(product[0]?.price).toLocaleString()}
              </span>
              <span className="mt-3 payment-total">
                Total : Rp. {state?.amount.toLocaleString()}
              </span>
            </div>
            <div className="col-md-6 border rounded py-3 gap-2 px-5 d-flex flex-column justify-content-center">
              <span className="payment-order-identity">Identity :</span>
              <span className="payment-identity">
                User & Phone Number : {user[0]?.name} / {user[0]?.phone}
              </span>
              <span className="payment-identity">Email : {user[0]?.email}</span>
            </div>
          </div>
          <div className="d-grid gap-2 mb-5" style={{ paddingRight: "90px" }}>
            <button
              className="py-3 payment-finish rounded"
              size="lg"
              onClick={handleReservation}
            >
              Finish payment
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
