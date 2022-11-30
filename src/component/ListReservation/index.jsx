import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../stores/actions/product";
import {
  getReservation,
  getReservationByUserId,
} from "../../stores/actions/reservation";

const ListReservation = (props) => {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentData, setCurrentData] = useState(null);
  const itemsPerpage = 2;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //   const reservation = useSelector((state) => state.reservation);
  //   const dataUserReservation = reservation.dataByUser;

  useEffect(() => {
    dispatch(getProduct(2));
    dispatch(getReservationByUserId(user.data.userId));
    dispatch(getReservation());
  }, []);

  console.log(data);

  // console.log(products.allData);
  //   console.log(user.data.userId);
  //   console.log(dataUserReservation);
  //   console.log(currentData);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerpage;
    setCurrentData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerpage));
  }, [itemOffset, itemsPerpage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerpage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentData?.map((item) => (
        <div className="d-flex my-5 gap-4" key={item.reservationId}>
          <div className="pageHistory--container--image__history">
            <img
              src={`https://res.cloudinary.com/dtjeegwiz/image/upload/${item.product.image1}`}
              alt="image history"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
          <div className="d-flex flex-column">
            <span
              className="font-nunito fw-bold"
              style={{ color: "#393939", fontSize: "24px" }}
            >
              {item.product.nameproduct
                ? item.product.nameproduct
                : "empty name product"}
            </span>
            <span
              className="font-nunito"
              style={{ color: "#393939", fontSize: "24px" }}
            >
              Start from {moment(item.startDate).format("MMM Do YY")} to{" "}
              {moment(item.returnDate).format("MMM Do YY")}
              {/* Jan 18 to 21 2021 */}
            </span>
            <span
              className="font-nunito fw-bold mt-2"
              style={{ color: "#393939", fontSize: "24px" }}
            >
              {item.amount ? `Prepayment : Rp.${item.amount}` : "Free Rent"}
            </span>
            <span
              className="font-nunito"
              style={{ color: "#087E0D", fontSize: "24px" }}
            >
              {item.statusPayment} and has been returned
            </span>
          </div>
        </div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  );
};

export default ListReservation;
