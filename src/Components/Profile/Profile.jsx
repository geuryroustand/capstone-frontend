import React from "react";
import avatar from "../../avatar.png";
import "./Profile.css";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <div className="d-flex profile">
        <img className="avatar-profile" src={auth?.avatar} alt="" />
        <p className="userName">
          {auth?.name} {auth?.surname}
        </p>

        <NavDropdown id="navbarScrollingDropdown">
          <Link className="dropdown-item profile-dropdown" to="/me">
            Profile
          </Link>
          <Link className="dropdown-item profile-dropdown" to="/me">
            Sign out
          </Link>
        </NavDropdown>
      </div>
    </div>
  );
};
