import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Form, Col, Button } from "react-bootstrap";
import { WiDirectionRight } from "react-icons/wi";
import "./PostForm.css";

export const PostForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container className="">
      <div className="d-flex directions-info">
        <p>Samana</p>
        <WiDirectionRight className="direction-icon" />
        <p>Santo Domingo</p>
      </div>
      <Form className="mt-5 post-form">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            When someone leaves a comment, you will be notified by email at the
            following address.
          </Form.Text>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Do you have a flight</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>AirlineName</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>FlightNumber</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <div className="d-flex">
          {/* Passenger and Date */}

          {/* DATE PICKED */}

          <Form.Label className="mr-4">
            Date
            <DatePicker
              // showTimeSelect
              selected={startDate}
              // selected={dataToSend.arrivalDate}
              onChange={(date) => setStartDate(date)}
              // timeClassName={handleColor}
              minDate={new Date()}
              maxDate={new Date("02-29-2024")}
              showPopperArrow={false}
              showMonthDropdown
              showYearDropdown
              yearDropdownItemNumber={1}
              scrollableYearDropdown
              dropdownMode="select"
              dateFormat="eee d, MMM  yyyy "
              // peekNextMonth
              // scrollableYearDropdown
              // strictParsing
              // timeIntervals={15}
              // dateFormat="MMMM d, yyyy h:mm aa"
              // dateFormat="Pp"
              withPortal
              portalId="root-portal"
              className="shared-ride-date-pick"
              required
              // value={dataToSend.arrivalDate}
              // onChange={(e) => handlerData("arrivalDate", e.target.value)}
            />
          </Form.Label>

          <Form.Group>
            <Form.Label>FlightNumber</Form.Label>
            <Form.Control />
          </Form.Group>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
