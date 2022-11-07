import React, { useEffect } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Vehicle from "../../component/Vehicle";
import "./index.css";
import { getProduct } from "../../stores/actions/product";
import { useDispatch, useSelector } from "react-redux";

export default function VehicleType() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.allData);

  useEffect(() => {
    dispatch(getProduct(50));
  }, []);

  return (
    <>
      <Header />
      <main className="vehicle-type">
        <nav className="navbar-search-vehicle navbar-expand-xl">
          <div className="collapse-search navbar-collapse">
            <form className="input-searchbar d-flex">
              <input
                className="form-control"
                type="text"
                placeholder="Vehicle Name"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Location"
              />
              <a
                className="dropdown-searchbar-filter nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Filter
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Popular In Town
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cars
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Motorbike
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bike
                  </a>
                </li>
              </ul>
              <button className="btn-search" type="button">
                Search
              </button>
            </form>
          </div>
        </nav>
        <section className="main-section gap-3">
          <div className="d-flex gap-3 flex-wrap">
            {product?.length > 0 ? (
              product?.map((item) => (
                <div key={item.productId}>
                  <Vehicle data={item} />
                </div>
              ))
            ) : (
              <div className="text-center">Data Not Found</div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
