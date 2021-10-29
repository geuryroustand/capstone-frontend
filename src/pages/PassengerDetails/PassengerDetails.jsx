import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { BookingFlightDetails } from "../../Components/BookingFlightDetails/BookingFlightDetails";
import { BookingSteps } from "../../Components/BookingSteps/BookingSteps";
import "./PassengerDetails.css";
export const PassengerDetails = () => {
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
              FROM: SAMANÁ EL CATEY AIRPORT (AZS) TO GRAN BAHÍA PRÍNCIPE SAN
              JUAN
            </h5>
            <div className="flight-info">
              <Row>
                <Col xs={12} md={6}>
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

            {/* ADDING RETURN FLIGHT   */}

            <div className=" mt-4 heading-location  ">
              <h5>RETURNING BACK TO SAMANÁ EL CATEY AIRPORT(AZS) ?</h5>

              <p className=" mt-4 add-return ">
                Make it a return journey for an additional
                <br /> €118.59 (approximately)
              </p>
            </div>
            <Button className=" add-btn mt-4 ">Add your return</Button>

            {/* RETURN FLIGHT INFORMATION  */}

            {/* <h5 className=" mt-4 heading-location ">
              RETURN: GRAN BAHÍA PRÍNCIPE SAN JUAN TO SAMANÁ EL CATEY AIRPORT
              (AZS)
            </h5>

            <div className="flight-info ">
              <Row>
                <Col xs={12} md={6}>
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
            </div> */}

            <Button className="continue-btn ">Continue </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
