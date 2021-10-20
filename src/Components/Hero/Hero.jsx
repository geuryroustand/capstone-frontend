import "./Hero.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {
  Container,
  Row,
  Form,
  FormControl,
  Button,
  Col,
} from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";

export default function Hero() {
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <header className="hero">
      <Container>
        <Row className="pt-5">
          <h1 className="heading-h1">Reliable, low cost airport transfers</h1>

          <h3>Easy airport transfers to and from your accommodation</h3>
        </Row>

        <Row>
          <Form inline>
            <Row className="d-flex mt-5 search-form">
              <Col xs={12} md="auto">
                {/* <ImLocation /> */}
                <input
                  className="search-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter pick-up location "
                />
              </Col>
              <Col xs={12} md="auto">
                {/* <ImLocation /> */}
                <input
                  className="search-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter destination "
                />
              </Col>
              <Col xs={12} md="auto">
                {/* <DatePicker
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  timeClassName={handleColor}
                  minDate={new Date()}
                  showPopperArrow={false}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  yearDropdownItemNumber={5}
                  // peekNextMonth
                  // scrollableYearDropdown
                  // strictParsing
                  timeIntervals={15}
                  // dateFormat="MMMM d, yyyy h:mm aa"
                  dateFormat="Pp"
                /> */}
              </Col>
              <Col xs={12} md="auto">
                <input
                  className="date-pick"
                  type="datetime-local"
                  name=""
                  id=""
                />
              </Col>
              <Col xs={12} md="auto">
                {/* {<AiOutlineUser style={{ color: "red" }} />} */}
                <select
                  name="passenger"
                  id="passenger"
                  className="select-passenger"
                >
                  {/* <option value="passenger">Passenger</option> */}
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </Col>
              <Col xs={12} md="auto">
                <Button className="btn-search-button">Search</Button>{" "}
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </header>
  );
}
