import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { format, parseISO } from "date-fns";
import { fetchSharedRide } from "../../action/index.js";
import { WiDirectionRight } from "react-icons/wi";
import "./FindSharedRide.css";
import logo from "../../hero.JPG";

const FindSharedRide = () => {
  let query = new URLSearchParams(useLocation().search);

  let pickupLocation = query.get("pickupLocationName");
  let dropLocation = query.get("dropLocationName");
  let arrivalDate = query.get("date");
  let passengers = query.get("passengers");

  const dispatch = useDispatch();

  const { searchSharedRide } = useSelector((state) => state.searchSharedRide);

  useEffect(() => {
    dispatch(fetchSharedRide(pickupLocation, dropLocation, arrivalDate));
  }, []);

  const clickHandler = (e) => {
    console.log(e);
  };

  return (
    <Container>
      {searchSharedRide?.map((sharedTransfer) => (
        <Row
          onClick={(e) => clickHandler(sharedTransfer)}
          className="shared-ride-card"
        >
          <Col>
            <div className="d-flex sharedLocationName">
              <p>{pickupLocation}</p>
              <WiDirectionRight className="direction-icon" />
              <p>{dropLocation}</p>
            </div>
            <p className="date-arrival">
              {format(new Date(arrivalDate), " EEEE d, MMM  yyyy ")}
            </p>
            <p>
              Depart at: <span className="bold-info"> 13:20 </span>
            </p>
            <p>
              Arrival at: <span className="bold-info"> 13:20 </span>
            </p>
            <p>
              Airline Name:{" "}
              <span className="bold-info">
                {sharedTransfer.arrivalAirlineName}{" "}
              </span>{" "}
            </p>
            <p>
              {" "}
              Flight Number:{" "}
              <span className="bold-info">
                {" "}
                {sharedTransfer.arrivalFlightNumber}{" "}
              </span>
            </p>
            <div className="profile">
              <img className="userProfileImg" src={logo} alt="" />
              <p className="bold-info ml-3">
                {sharedTransfer.passengersSurname}
              </p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FindSharedRide;
