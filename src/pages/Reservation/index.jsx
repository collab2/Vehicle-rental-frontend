import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import "./Reservation.css";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import defaultImage from "../../assets/images/vehicle-default.jpg";
// import { reservation } from "../../stores/actions/reservation";
// import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useDispatch } from "react-redux";
import { getProductById } from "../../stores/actions/product";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export default function Reservation() {
  // const { productId } = useParams();
  const [product, setProduct] = useState({});
  const imageProduct = `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667656027/${product[0]?.image1}`;
  // const userId = localStorage.getItem("userId");

  const { productId } = useParams();

  const dispatch = useDispatch();

  const getData = () => {
    try {
      dispatch(getProductById(productId))
        .then((res) => setProduct(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/payment", {
      state: {
        quantity: counter,
        productId: productId,
        startDate: startDate,
        endDate: endDate,
        amount: "20000",
      },
    });
  };

  const [counter, setCounter] = useState(0);

  const increment = (data) => {
    setCounter(counter + data);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="row mt-5 ms-lg-5 d-md-flex justify-content-md-center container-main mb-lg-5 ">
        <div className="col-lg-12 p-0 ">
          <div className="col-lg-4 mb-5 d-flex flex-row align-items-center wrapper-link-detail">
            <button
              className="btn"
              onClick={() => handleNavigate("vehicle-type")}
            >
              <div className="h3">{"< "} Reservation</div>{" "}
            </button>
          </div>
        </div>
        <div className="col-lg-6 p-3 d-flex justify-content-center">
          <div className="wrapper-image">
            <img src={imageProduct} alt="vehicle" className="img-vehicle" />
          </div>
        </div>
        <div className="col-lg-6 p-3 mb-3">
          <div className="wrapper-form">
            <h1 className="title-detail">
              {product[0]?.nameproduct} <br />
              <span className="detail-title-location">
                {product[0]?.location}
              </span>
            </h1>

            <p className="no-pre">No Prepayment</p>

            <div className="d-flex flex-row justify-content-between align-items-center  mt-5 mb-5 col-5">
              <button
                className="btn-grey-minus"
                onClick={decrement}
                disabled={counter === 0 ? true : false}
              >
                -
              </button>
              <p className="mx-5 fw-bold mt-3 mx-3">{counter}</p>
              <button className="btn-yellow-plus" onClick={() => increment(1)}>
                +
              </button>
            </div>

            <p className="date-reservation">Start Date :</p>

            <DatePicker
              className="datePicker"
              dateFormat="dd-MM-yyyy"
              placeholderText="Select Date"
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <p className="date-reservation">Return Date :</p>
            <DatePicker
              className="datePicker"
              dateFormat="dd-MM-yyyy"
              placeholderText="Select Date"
              minDate={startDate}
              selected={endDate}
              maxDate={addDays(new Date(), 7)}
              onChange={(date: Date) => setEndDate(date)}
            />

            {/* <select className="datePicker">
              <option value="" disabled selected>
                Select Day
              </option>
              <option value="1">1 Day</option>
              <option value="2">2 Day</option>
              <option value="3">3 Day</option>
              <option value="4">4 Day</option>
              <option value="5">5 Day</option>
              <option value="6">6 Day</option>
              <option value="7">7 Day</option>
            </select> */}
          </div>
        </div>

        <div className="col-lg-10 p-0">
          <div className="btn-pay" onClick={handleReservation}>
            <p className="reservation-amount">
              Pay Now : Rp.{product[0]?.price}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
