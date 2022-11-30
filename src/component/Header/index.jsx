import React from "react";
import Logo from "../Logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import people from "../../assets/img/default-profile.png";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getUserById } from "../../stores/actions/user";

export default function Header() {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const isLogin = localStorage.getItem("token");
  const user = useSelector((state) => state.user);
  const isAdmin = user.data.role;

  // console.log(user.data.role);

  console.log(user.data.role);
  const handleLogout = async () => {
    try {
      await axios.post("auth/logout");
      localStorage.clear();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  const handleProfile = (e) => {
    e.preventDefault();
    navigate(`/profile/${id}`);
  };

  // console.log(
  //   `https://res.cloudinary.com/dtjeegwiz/image/upload/v1667500751/AutoRent/user/${user.data.image}`
  // );

  return (
    <Navbar bg="white" expand="lg" className="font-nunito py-4">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <div className="mx-auto">
            <Nav className="align-items-center gap-2">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/vehicle-type">Vehicle Type</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
              {isAdmin === "admin" ? (
                <>
                  <NavDropdown title="Admin Management" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/add-vehicle">
                      Add Vehicle
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/approval-payment">
                      Approval Payment
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <> </>
              )}
            </Nav>
          </div>
          {isLogin ? (
            <div className="d-flex align-items-center justify-content-center">
              <div className="me-4 ms-5">
                {user.data.name ? user.data.name : "no name"}
              </div>
              <NavDropdown
                title={
                  <img
                    src={
                      user.data.image
                        ? process.env.REACT_APP_CLOUDINARY_URL_IMAGE +
                          user.data.image
                        : people
                    }
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/profile" onClick={handleProfile}>
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          ) : (
            <div className="d-flex gap-3 justify-content-center">
              <button
                className="button-navbar bg-white border-yellow"
                onClick={() => navigate("/signin")}
              >
                Login
              </button>
              <button
                className="button-navbar background-yellow border-0"
                onClick={() => navigate("/signup")}
              >
                Register
              </button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
