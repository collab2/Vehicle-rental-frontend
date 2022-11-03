import React from "react";
import Logo from "../Logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import people from "../../assets/img/default-profile.png";

export default function Header() {
  const isLogin = true;
  return (
    <Navbar bg="white" expand="lg" className="font-nunito py-4">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-4 me-5">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Vehicle Type</Nav.Link>
            <Nav.Link href="">History</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href=""></Nav.Link>
          </Nav>
          {isLogin ? (
            <div className="d-flex align-items-center justify-content-center">
              <div>Muhammad Abdullah</div>
              <NavDropdown
                title={
                  <img
                    src={people}
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          ) : (
            <div className="d-flex gap-3 justify-content-center">
              <button className="button-navbar bg-white border-yellow">
                Login
              </button>
              <button className="button-navbar background-yellow border-0">
                Register
              </button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
