import React, { useEffect } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Vehicle from "../../component/Vehicle";
import "./index.css";
import { getProduct, getProductByCategory } from "../../stores/actions/product";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function VehicleType() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.allData);
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    dispatch(getProduct(50, searchLocation, searchName));
  }, [50, searchLocation, searchName]);

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchLocation = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getProduct(50, searchName, searchLocation));
  };

  const handleSearchByCategory = (category) => {
    dispatch(getProductByCategory(category));
  };

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
                aria-label="Search"
                onChange={handleSearchName}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Location"
                aria-label="Search"
                onChange={handleSearchLocation}
              />
              <a
                className="dropdown-searchbar-filter nav-link dropdown-toggle mx-5 mt-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Filter
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleSearchByCategory("popular")}
                  >
                    Popular In Town
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleSearchByCategory("popular")}
                  >
                    Cars
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Motorbike
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleSearchByCategory("bike")}
                  >
                    Bike
                  </a>
                </li>
              </ul>
              <button
                className="btn-search"
                type="button"
                onClick={handleSearch}
              >
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
