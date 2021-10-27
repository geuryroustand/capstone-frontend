import React from "react";

import "./BookingDetails.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import standardImg from "../../images/standard.webp";
import peopleCarrier from "../../images/people-carrier.webp";

import { FaUserAlt, FaSuitcase } from "react-icons/fa";
import { BsCheckCircleFill, BsCheckLg } from "react-icons/bs";
import { MdFlight } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BookingFlightDetails } from "../../Components/BookingFlightDetails/BookingFlightDetails";

export const BookingDetails = () => {
  return (
    <Container className="mt-5 main-booking-section">
      <Row>
        <Col xs={12} md={5}>
          <BookingFlightDetails />
        </Col>
        <Col xs={12} md={7}>
          <h3 className="mb-5 mt-3">Your Private Taxi Options </h3>

          <Row className="main-taxi-option-section">
            <Col xs={12} md={8}>
              <div className="d-flex">
                <div>
                  <img src={standardImg} alt="" />
                </div>

                <div>
                  <div>
                    <FaUserAlt />
                    <span>Up to 4 passengers</span>
                  </div>

                  <div>
                    <FaSuitcase />
                    <span>Up to 4 suitcases</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <p>Total Price One-Way</p>
              <h3>149 $</h3>
              <div>
                <div>
                  <BsCheckCircleFill />
                  <span>FREE Cancellation</span>
                </div>
                <div>
                  <BsCheckLg />
                  <span>No hidden costs</span>
                </div>

                <div>
                  <MdFlight />
                  <span>Flight tracking</span>
                </div>
                <div>
                  <VscWorkspaceTrusted />
                  <span>Tried and trusted drivers</span>
                </div>
              </div>
              <Button>Select this vehicle </Button>
            </Col>
          </Row>

          {/* fist taxi option */}

          <Row className="main-taxi-option-section mt-2">
            <Col xs={12} md={8}>
              <div className="d-flex">
                <div>
                  <img src={peopleCarrier} alt="" />
                </div>

                <div>
                  <div>
                    <FaUserAlt />
                    <span>Up to 4 passengers</span>
                  </div>

                  <div>
                    <FaSuitcase />
                    <span>Up to 4 suitcases</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <p>Total Price One-Way</p>
              <h3>149 $</h3>
              <div>
                <div>
                  <BsCheckCircleFill />
                  <span>FREE Cancellation</span>
                </div>
                <div>
                  <BsCheckLg />
                  <span>No hidden costs</span>
                </div>

                <div>
                  <MdFlight />
                  <span>Flight tracking</span>
                </div>
                <div>
                  <VscWorkspaceTrusted />
                  <span>Tried and trusted drivers</span>
                </div>
              </div>
              <Button>Select this vehicle </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
