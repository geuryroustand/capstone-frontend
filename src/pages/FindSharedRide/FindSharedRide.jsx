import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
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

  const state = useSelector((state) => state.searchSharedRide.searchSharedRide);

  useEffect(() => {
    dispatch(fetchSharedRide(pickupLocation, dropLocation, arrivalDate));
  }, []);

  return (
    <Container>
      {state.map((sharedTransfer) => (
        <Row className="shared-ride-card">
          <Col>
            <img className="userProfileImg" src={logo} alt="" />
            <div className="d-flex">
              <p>{sharedTransfer.pickupLocationName}</p>
              <WiDirectionRight />
              <p>{sharedTransfer.dropLocationName}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FindSharedRide;
