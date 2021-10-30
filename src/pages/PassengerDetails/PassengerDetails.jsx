import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BookingFlightDetails } from "../../Components/BookingFlightDetails/BookingFlightDetails";
import { BookingSteps } from "../../Components/BookingSteps/BookingSteps";
import "./PassengerDetails.css";
export const PassengerDetails = () => {
  const [addReturnTaxi, setAddReturnTaxi] = useState();

  const state = useSelector((state) => state);
  const { taxiSelected, prices } = state.formSearchTransfer;
  const [pricesTaxi] = prices;

  console.log(addReturnTaxi);

  const handlerReturnTransferAndModal = (e) => {
    e.preventDefault();
    setAddReturnTaxi(!addReturnTaxi);
  };

  return (
    <Container className="mt-4">
      <Row>
        <BookingSteps />
        <Col xs={12} md={4}>
          <BookingFlightDetails />
        </Col>

        <Col xs={12} md={8}>
          <h3 className="mb-5 mt-3">Passenger details</h3>
          <Form>
            <div className="form-passenger">
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" placeholder="surname" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll send your booking voucher here.
                </Form.Text>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  {/* <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" /> */}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control type="number" placeholder="Mobile number" />
                </Form.Group>
              </Form.Row>
            </div>
            <h3 className="mb-5 mt-5">Add flight details</h3>
            <h5 className=" heading-location ">
              FROM: {taxiSelected?.pickUpLocation.toUpperCase()}{" "}
              <span className="pr-1">TO</span>
              {taxiSelected?.dropLocation.toUpperCase()}
            </h5>
            <div className="flight-info">
              <Row>
                <Col xs={12} md={6}>
                  <p>Your transfer is from:</p>
                  <h6>{taxiSelected?.pickUpLocation}</h6>
                </Col>

                <Col>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Airline</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Airline Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Flight number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Flight number"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Departure Airport</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Where are you flying from?"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            {/* ADDING RETURN FLIGHT   */}
            {taxiSelected?.journey === "OneWay" && (
              <div className=" mt-4 heading-location  ">
                <h5>RETURNING BACK TO SAMANÁ EL CATEY AIRPORT(AZS) ?</h5>

                <p className="add-return ">
                  Make it a return journey for an additional
                  <br />
                  {taxiSelected?.taxiOption === "taxiOneOption"
                    ? pricesTaxi?.roundTripPriceTaxi1
                    : pricesTaxi?.roundTripPriceTaxi2}
                  $ approximately
                </p>

                {/* se */}

                {addReturnTaxi && (
                  <div className="flight-info ">
                    <Row>
                      <Col xs={12} md={6} style={{ color: "black" }}>
                        <p>Your transfer is from:</p>
                        <h6>Samaná El Catey airport (AZS)</h6>
                      </Col>

                      <Col>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label>Airline</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Airline Name"
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                          <Form.Label>Flight number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Flight number"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Departure Airport</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Where are you flying from?"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}

                <Button className="continue-btn"> Continue</Button>
              </div>
            )}
            {/* RETURN FLIGHT INFORMATION  */}

            {taxiSelected?.journey === "roundTrip" ? (
              <>
                <h5 className=" mt-4 heading-location ">
                  RETURN: {taxiSelected?.dropLocation.toUpperCase()}
                  <span className="pl-1 pr-1">TO</span>
                  {taxiSelected?.pickUpLocation.toUpperCase()}
                </h5>

                <div className="flight-info ">
                  <Row>
                    <Col xs={12} md={6}>
                      <p>Your transfer is from:</p>
                      <h6>{taxiSelected?.dropLocation}</h6>
                    </Col>

                    <Col>
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>Airline</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Airline Name"
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                        <Form.Label>Flight number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Flight number"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Departure Airport</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Where are you flying from?"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </>
            ) : (
              ""
            )}

            {/*  */}
            {taxiSelected.journey === "OneWay" ? (
              <Button
                onClick={handlerReturnTransferAndModal}
                className=" add-btn mt-4"
              >
                {" "}
                Add your return{" "}
              </Button>
            ) : (
              <Button className=" continue-btn"> Continue</Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
