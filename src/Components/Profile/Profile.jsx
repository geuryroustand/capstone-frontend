import React from "react";
import avatar from "../../avatar.png";
import "./Profile.css";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Profile = () => {
  const state = useSelector((state) => state.auth);

  console.log("aaaa", state);
  return (
    <div className="d-flex">
      <img className="avatar-profile" src={avatar} alt="" />
      <p className="userName">{/* {name} {surname} */}</p>

      <NavDropdown id="navbarScrollingDropdown">
        <NavDropdown.Item className="profile-dropdown" href="#action/3.1">
          Action
        </NavDropdown.Item>
        <NavDropdown.Item className="profile-dropdown" href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item className="profile-dropdown" href="#action/3.3">
          Something
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="profile-dropdown" href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
