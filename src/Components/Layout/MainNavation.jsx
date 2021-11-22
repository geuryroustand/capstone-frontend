import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./MainNavation.css";
import logo from "../../../src/logo.svg";
import { Link, NavLink } from "react-router-dom";
// import { Profile } from "../Profile/Profile";

export default function MainNavation() {
  return (
    <>
      <Navbar className="navbar-bg" expand="lg">
        <Container>
          <Link className=" navbar-brand logo-main" to="/">
            <span className="logo-vacations-text">Vacations</span>Taxi.com
          </Link>

          <Nav className="mr-auto ml-4 display-nav">
            <NavLink
              className="nav-link-transfer-option nav-link "
              activeClassName="active-link  "
              to="/"
              exact
            >
              Private Transfers
            </NavLink>

            <NavLink
              activeClassName="active-link  "
              className="nav-link-transfer-option ml-3   nav-link"
              to="/sharedRide"
              exact
            >
              Shared Ride
            </NavLink>
          </Nav>

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

              {/* <Profile /> */}

              <div
                style={{ display: "none" }}
                className="nav-link-small-mobile"
              >
                <NavLink
                  className="nav-link-transfer-option nav-link "
                  activeClassName="active-link  "
                  to="/"
                  exact
                >
                  Private Transfers
                </NavLink>

                <NavLink
                  activeClassName="active-link  "
                  className="nav-link-transfer-option ml-3   nav-link"
                  to="/sharedRide"
                  exact
                >
                  Shared Ride
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
