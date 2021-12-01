import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./MainNavation.css";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { useSelector } from "react-redux";

export default function MainNavation() {
  const { auth } = useSelector((state) => state);

  const query = new URLSearchParams(useLocation().search);
  const pickUpLocation = query.get("pickUpLocation");

  return (
    <>
      <Navbar className="navbar-bg" expand="lg">
        <Container>
          <Link className=" navbar-brand logo-main" to="/">
            <span className="logo-vacations-text">Vacations</span>Taxi.com
          </Link>

          {!pickUpLocation && (
            <>
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
            </>
          )}

          <Navbar.Toggle aria-controls="basic-navbar-nav  " />
          <Navbar.Collapse
            className="navbar-collapse-n"
            id="basic-navbar-nav  "
          >
            <Nav className="mr-auto  ">
              <Link className="nav-link propose-a-ride" to="/PostSharedRide">
                Propose a ride
              </Link>

              {!auth.login && (
                <>
                  <Link className="btn-register nav-link" to="/register">
                    Register
                  </Link>

                  <Link
                    className="btn-sign-in nav-link"
                    to="/signIn?signIn=signIn"
                  >
                    Sign in
                  </Link>
                </>
              )}

              {auth.login && <Profile />}

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
