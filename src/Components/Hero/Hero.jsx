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
import { FaUserAlt } from "react-icons/fa";

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
            <Row className="search-form mt-5 ">
              <div className="d-flex search-form-selected">
                <label htmlFor="one-way" for="one-way" className="radio-label">
                  One-way
                  <input
                    type="radio"
                    checked="checked"
                    name="radio"
                    id="one-way"
                  />
                  <span class="checkmark"></span>
                </label>
                <label htmlFor="return" for="return" className="radio-label">
                  <input type="radio" name="radio" id="return" />
                  Return
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="d-flex ">
                <Col className="input-col">
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter pick-up location "
                  />
                  <ImLocation className="location-icon" />
                </Col>
                <Col className="input-col">
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                  />
                  <ImLocation className="location-icon" />
                </Col>
                {/* <Col>
                  <DatePicker
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
                />
                </Col> */}
                <Col>
                  <input
                    className="date-pick"
                    type="datetime-local"
                    name=""
                    id=""
                  />
                </Col>
                <Col className="input-col select-passenger-section">
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
                  <FaUserAlt className="user-icon" />
                </Col>
                <Col xs={12} md="auto">
                  <Button className="btn-search-button">Search</Button>{" "}
                </Col>
              </div>
            </Row>
          </Form>
        </Row>
      </Container>
    </header>
  );
}
