import React, { useEffect } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Vehicle from "../../component/Vehicle";
import "./index.css";
import { getProduct } from "../../stores/actions/product";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { useState } from "react";
import { getCategory } from "../../stores/actions/category";

export default function VehicleType() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const product = productState.allData;
  const category = useSelector((state) => state.category);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    nameproduct: "",
    location: "",
    filter: "",
  });

  const handleChange = (e) => {
    return setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(category);

  const handleFilter = (e) => {
    e.preventDefault();
    axios
      .get(
        `/product?category=${form.filter}&nameproduct=${form.nameproduct}&location=${form.location}`
      )
      .then((res) => {
        setProducts(res.data.data);
        // setForm({ nameproduct: "", filter: "", location: "" });
      });
  };

  // const handleFilter = (e) => {
  //   e.preventDefault();
  //   console.log(form.filter);
  //   dispatch(filterVehicle(form.filter, form.nameproduct, form.location));
  //   setProducts(product);
  // };

  const getAllData = async () => {
    try {
      await dispatch(getProduct(50));
      setProducts(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
    dispatch(getCategory());
  }, []);

  console.log(products);

  return (
    <>
      <Header />
      <main className="vehicle-type">
        <nav className="navbar-search-vehicle navbar-expand-xl">
          <div className="collapse-search navbar-collapse">
            <form
              className="input-searchbar d-flex gap-2"
              onSubmit={handleFilter}
            >
              <input
                className="form-control"
                type="text"
                value={form.name}
                name="nameproduct"
                onChange={handleChange}
                placeholder="Vehicle Name"
                aria-label="Search"
              />
              <input
                className="form-control"
                type="text"
                name="location"
                onChange={handleChange}
                value={form.location}
                placeholder="Location"
                aria-label="Search"
              />
              <select
                className="form-select"
                aria-label="Default select example"
                name="filter"
                onChange={handleChange}
              >
                <option selected disabled name="filter" value="">
                  Selected
                </option>
                {category?.data?.map((elem) => (
                  <>
                    <option name="filter" value={elem}>
                      {elem}
                    </option>
                  </>
                ))}
              </select>

              <button className="btn-search" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <section className="container">
          {productState.isLoading ? (
            <div className="d-flex vh-100 justify-content-center">
              <div className="spinner-border text-primary mt-5" role="status">
                <span className="visually-hidden" />
              </div>
            </div>
          ) : (
            <div className="vehicle-data">
              {products?.length > 0 ? (
                products?.map((item) => (
                  <div key={item.productId}>
                    <Vehicle data={item} />
                  </div>
                ))
              ) : (
                <div className="text-center">Data Not Found</div>
              )}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
