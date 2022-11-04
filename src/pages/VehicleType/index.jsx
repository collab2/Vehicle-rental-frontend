import React from "react";
import Header from "../../component/Header";
import Vehicle from "../../component/Vehicle";
import "./index.css";

export default function VehicleType() {
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
        <section className="main-section">
          <Vehicle />
        </section>
      </main>
    </>
  );
}
