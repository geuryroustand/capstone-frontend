import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { BookingFlightDetails } from "../../Components/BookingFlightDetails/BookingFlightDetails";
import { BookingSteps } from "../../Components/BookingSteps/BookingSteps";
import "./PassengerDetails.css";
import { taxiOptionSelected } from "../../action";
import { useEffect } from "react";

export const PassengerDetails = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();
  const [addReturnTaxi, setAddReturnTaxi] = useState();

  const { taxiSelected, prices } = state.formSearchTransfer;
  const [pricesTaxi] = prices;

  const [sharedRideYesOrNo, setSharedRideYesOrNo] = useState("No");

  const [transferDetails, setTransfersDetails] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    sharedRideYesOrNo,

    arrivalAirlineName: "",
    arrivalFlightNumber: "",
    arrivalDepartureAirport: "",

    departureAirlineName: "",
    departureFlightNumber: "",
    departureDepartureAirport: "",

    // taxiSelectedInfo: taxiSelected,
    ...taxiSelected,
  });

  useEffect(() => {
    if (sharedRideYesOrNo === "Yes") {
      if (taxiSelected.taxiOption === "taxiOneOption") {
        setTransfersDetails({
          ...transferDetails,
          sharedRideYesOrNo: "Yes",
          price: (taxiSelected.price / 4) * taxiSelected.passengers,
        });
      }
    } else {
      setTransfersDetails({
        ...transferDetails,
        price: taxiSelected.price,
      });
    }
  }, [sharedRideYesOrNo]);

  console.log(transferDetails);
  const handlerReturnTransferAndModal = (e) => {
    e.preventDefault();
    setAddReturnTaxi(!addReturnTaxi);
  };

  const handlerFlightInfoAndPassengerDetails = (key, value) => {
    setTransfersDetails({ ...transferDetails, [key]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(taxiOptionSelected(transferDetails));
    history.push("/paymentDetails?step3=true&&step2=true");
  };

  return (
    <Container className="mt-4">
      <Row>
        <BookingSteps />
        <Col xs={12} md={4}>
          <BookingFlightDetails transferSelected={transferDetails} />
        </Col>

        <Col xs={12} md={8}>
          <h3 className="mb-5 mt-3">Passenger details</h3>
          <Form onSubmit={handlerSubmit}>
            <div className="d-flex search-form-selected">
              <p>Would you like to share your transfer with other travelers?</p>
              <label className="radio-label ml-4">
                Yes
                <input
                  type="radio"
                  name="radio"
                  onChange={(e) =>
                    setSharedRideYesOrNo("Yes", e.target.checked)
                  }
                  // defaultChecked={sharedRideYesOrNo}
                />
                <span className="checkmark"></span>
              </label>
              <label className="radio-label">
                No
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={sharedRideYesOrNo}
                  onChange={(e) => setSharedRideYesOrNo("No", e.target.checked)}
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="form-passenger">
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={transferDetails.name}
                    onChange={(e) =>
                      handlerFlightInfoAndPassengerDetails(
                        "name",
                        e.target.value
                      )
                    }
                    type="text"
                    placeholder="Enter name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    value={transferDetails.surname}
                    type="text"
                    placeholder="surname"
                    onChange={(e) =>
                      handlerFlightInfoAndPassengerDetails(
                        "surname",
                        e.target.value
                      )
                    }
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={transferDetails.email}
                  onChange={(e) =>
                    handlerFlightInfoAndPassengerDetails(
                      "email",
                      e.target.value
                    )
                  }
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll send your booking voucher here.
                </Form.Text>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  {/* <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" /> */}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control
                    value={transferDetails.phoneNumber}
                    type="number"
                    onChange={(e) =>
                      handlerFlightInfoAndPassengerDetails(
                        "phoneNumber",
                        e.target.value
                      )
                    }
                    placeholder="Mobile number"
                  />
                </Form.Group>
              </Form.Row>
            </div>
            <h3 className="mb-5 mt-5">Add flight details</h3>
            <h5 className=" heading-location ">
              FROM: {taxiSelected?.pickUpLocation?.toUpperCase()}{" "}
              <span className="pr-1">TO</span>
              {taxiSelected?.dropLocation?.toUpperCase()}
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
                      value={transferDetails.arrivalAirlineName}
                      onChange={(e) =>
                        handlerFlightInfoAndPassengerDetails(
                          "arrivalAirlineName",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Flight number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Flight number"
                      value={transferDetails.arrivalFlightNumber}
                      onChange={(e) =>
                        handlerFlightInfoAndPassengerDetails(
                          "arrivalFlightNumber",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Departure Airport</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Where are you flying from?"
                      value={transferDetails.arrivalDepartureAirport}
                      onChange={(e) =>
                        handlerFlightInfoAndPassengerDetails(
                          "arrivalDepartureAirport",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            {/* ADDING RETURN FLIGHT   */}
            {taxiSelected?.journey === "OneWay" && (
              <div className=" mt-4 heading-location  ">
                <h5>
                  RETURNING BACK TO{" "}
                  {taxiSelected?.pickUpLocation?.toUpperCase()} ?
                </h5>

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
                  <div className="flight-info add-return-form ">
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
                            value={transferDetails.departureAirlineName}
                            onChange={(e) =>
                              handlerFlightInfoAndPassengerDetails(
                                "departureAirlineName",
                                e.target.value
                              )
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                          <Form.Label>Flight number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Flight number"
                            value={
                              transferDetails.departureDepartureFlightNumber
                            }
                            onChange={(e) =>
                              handlerFlightInfoAndPassengerDetails(
                                "departureDepartureFlightNumber",
                                e.target.value
                              )
                            }
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Departure Airport</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Where are you flying from?"
                            value={transferDetails.departureDepartureAirport}
                            onChange={(e) =>
                              handlerFlightInfoAndPassengerDetails(
                                "departureDepartureAirport",
                                e.target.value
                              )
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}

                <Button type="submit" className="continue-btn">
                  Continue
                </Button>
              </div>
            )}
            {/* RETURN FLIGHT INFORMATION  */}

            {taxiSelected?.journey === "roundTrip" ? (
              <>
                <h5 className=" mt-4 heading-location ">
                  RETURN: {taxiSelected?.dropLocation?.toUpperCase()}
                  <span className="pl-1 pr-1">TO</span>
                  {taxiSelected?.pickUpLocation?.toUpperCase()}
                </h5>

                <div className="flight-info  ">
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
                          value={transferDetails.departureAirlineName}
                          onChange={(e) =>
                            handlerFlightInfoAndPassengerDetails(
                              "departureAirlineName",
                              e.target.value
                            )
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                        <Form.Label>Flight number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Flight number"
                          value={transferDetails.departureFlightNumber}
                          onChange={(e) =>
                            handlerFlightInfoAndPassengerDetails(
                              "departureFlightNumber",
                              e.target.value
                            )
                          }
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Departure Airport</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Where are you flying from?"
                          value={transferDetails.departureDepartureAirport}
                          onChange={(e) =>
                            handlerFlightInfoAndPassengerDetails(
                              "departureDepartureAirport",
                              e.target.value
                            )
                          }
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
              <Button type="submit" className="continue-btn">
                {" "}
                Continue
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
