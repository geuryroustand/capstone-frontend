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
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { fetchPrices, taxiOptionSelected } from "../../action";
import { useSelector } from "react-redux";
import { BookingSteps } from "../../Components/BookingSteps/BookingSteps";

export const BookingDetails = () => {
  const state = useSelector((state) => state);

  const [prices] = state.formSearchTransfer.prices;
  const dropPlace = prices?.dropPlace;
  const pickupPlace = prices?.pickupPlace;

  let query = new URLSearchParams(useLocation().search);

  let pickUpLocation = query.get("pickUpLocation");
  let dropLocation = query.get("dropLocation");
  let arrivalDate = query.get("arrivalDate");
  let departureDate = query.get("departureDate");
  let journey = query.get("journey");
  let passengers = query.get("passengers");

  console.log(departureDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchPrices(query.get("pickUpLocation"), query.get("dropLocation"))
    );
  }, []);

  const history = useHistory();

  const handlerTaxiPickOption = (taxiOption) => {
    dispatch(
      taxiOptionSelected({
        pickUpLocation,
        dropLocation,
        arrivalDate,
        departureDate,
        journey,
        passengers,
        taxiOption,
      })
    );

    history.push(`/passengerDetails?step2=true`);
  };

  return (
    <Container className="mt-3 main-booking-section">
      <Row>
        <BookingSteps />
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
            <Col className="prices-section" xs={12} lg={4}>
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
              <Button
                onClick={(e) => handlerTaxiPickOption("taxiOneOption")}
                className="mt-3 select-vehicle-btn "
              >
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
            <Col className="prices-section" xs={12} lg={4}>
              {journey === "roundTrip" ? (
                <>
                  <p>Total Price Round Trip</p>
                  <h3> {prices?.roundTripPriceTaxi2} $</h3>
                </>
              ) : (
                <>
                  <p>Total Price One Way</p>
                  <h3> {prices?.oneWayPriceTex2} $</h3>
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
              <Button
                onClick={(e) => handlerTaxiPickOption("taxiTwoOption")}
                className="mt-3 select-vehicle-btn "
              >
                Select this vehicle{" "}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
