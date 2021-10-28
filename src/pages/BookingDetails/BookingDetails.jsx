import React, { useEffect } from "react";

import "./BookingDetails.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import standardImg from "../../images/standard.webp";
import peopleCarrier from "../../images/people-carrier.webp";

import { FaUserAlt, FaSuitcase } from "react-icons/fa";
import { BsCheckCircleFill, BsCheckLg } from "react-icons/bs";
import { MdFlight } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BookingFlightDetails } from "../../Components/BookingFlightDetails/BookingFlightDetails";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { fetchPrices } from "../../action";
import { useSelector } from "react-redux";

export const BookingDetails = () => {
  const state = useSelector((state) => state);

  const [prices] = state.formSearchTransfer.prices;
  const dropPlace = prices?.dropPlace;
  const pickupPlace = prices?.pickupPlace;

  let query = new URLSearchParams(useLocation().search);
  let passengers = query.get("passengers");
  let arrivalDate = query.get("arrivalDate");
  let departureDate = query.get("departureDate");
  let journey = query.get("journey");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchPrices(query.get("pickUpLocation"), query.get("dropLocation"))
    );
  }, []);

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
                    <FaUserAlt className="icon-fist-section" />
                    <span>Up to 4 passengers</span>
                  </div>

                  <div>
                    <FaSuitcase className="icon-fist-section" />
                    <span>Up to 4 suitcases</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="prices-section" xs={12} md={4}>
              {journey === "OneWay" ? (
                <>
                  <p>Total Price One Way</p>
                  <h3> {prices?.oneWayPriceTex1} $</h3>
                </>
              ) : (
                <>
                  <p>Total Price Round Trip</p>
                  <h3> {prices?.roundTripPriceTaxi1} $</h3>
                </>
              )}
              <div>
                <div>
                  <BsCheckCircleFill
                    style={{ color: "#003580", fontSize: "25px" }}
                    className="mr-2"
                  />
                  <span>FREE Cancellation</span>
                </div>
                <div>
                  <BsCheckLg
                    style={{ color: "#147b22", fontSize: "25px" }}
                    className="mr-2"
                  />
                  <span>No hidden costs</span>
                </div>

                <div>
                  <MdFlight style={{ fontSize: "25px" }} className="mr-2" />
                  <span>Flight tracking</span>
                </div>
                <div>
                  <VscWorkspaceTrusted
                    style={{ color: "#003580", fontSize: "25px" }}
                    className="mr-2"
                  />
                  <span>Tried and trusted drivers</span>
                </div>
              </div>
              <Button className="mt-3 select-vehicle-btn ">
                Select this vehicle{" "}
              </Button>
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
                    <FaUserAlt className="icon-fist-section" />
                    <span>Up to 8 passengers</span>
                  </div>

                  <div>
                    <FaSuitcase className="icon-fist-section" />
                    <span>Up to 8 suitcases</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="prices-section" xs={12} md={4}>
              {journey === "roundTrip" ? (
                <>
                  <p>Total Price Round Trip</p>
                  <h3> {prices?.oneWayPriceTex2} $</h3>
                </>
              ) : (
                <>
                  <p>Total Price Round Trip</p>
                  <h3> {prices?.roundTripPriceTaxi2} $</h3>
                </>
              )}
              <div>
                <div>
                  <BsCheckCircleFill
                    style={{ color: "#003580", fontSize: "25px" }}
                    className="mr-2"
                  />
                  <span>FREE Cancellation</span>
                </div>
                <div>
                  <BsCheckLg
                    style={{ color: "#147b22", fontSize: "25px" }}
                    className="mr-2"
                  />
                  <span>No hidden costs</span>
                </div>

                <div>
                  <MdFlight
                    style={{ fontSize: "25px" }}
                    className="mr-2 mb-1"
                  />
                  <span>Flight tracking</span>
                </div>
                <div>
                  <VscWorkspaceTrusted
                    style={{ color: "#003580", fontSize: "25px" }}
                    className="mr-2 mb-1"
                  />
                  <span>Tried and trusted drivers</span>
                </div>
              </div>
              <Button className="mt-3 select-vehicle-btn ">
                Select this vehicle{" "}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
