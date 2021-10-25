import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./MainNavation.css";
import logo from "../../../src/logo.svg";
import { Link } from "react-router-dom";
export default function MainNavation() {
  return (
    <>
      <Navbar className="navbar-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav  " />
          <Navbar.Collapse
            className="navbar-collapse-n"
            id="basic-navbar-nav  "
          >
            <Nav className="mr-auto  ">
              <Link className="btn-register nav-link" to="/register">
                Register
              </Link>

              <Link className="btn-sign-in nav-link" to="/sign">
                Sign in
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
