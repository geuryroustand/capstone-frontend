import "./Hero.css";
import React, { useState, useEffect, useRef } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import {
  fetchDropLocations,
  fetchLocations,
  selectPickedLocation,
} from "../../action";
import { connect, useSelector } from "react-redux";
import { AutoComplete } from "../Autocomplete/AutoComplete";
import { AutoCompleteDrop } from "../Autocomplete/AutoCompleteDrop";

const mapDispatchToProps = (dispatch) => ({
  fetchPickLocation: (searchPick) => dispatch(fetchLocations(searchPick)),
  fetchDropLocation: (searchDrop) => dispatch(fetchDropLocations(searchDrop)),
});

const mapStateToProps = (state) => state;

const Hero = ({ fetchPickLocation, fetchDropLocation }) => {
  const state = useSelector((state) => state);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");

  // const [startDate, setStartDate] = useState(new Date());

  const pickLocation = (lo) => {
    setPickupLocation(lo.location);
  };

  const getDropLocation = (lo) => {
    setDropLocation(lo.location);
  };
  const ref = useRef(pickupLocation);
  console.log(ref.current);

  const handlerData = () => {};
  // let handleColor = (time) => {
  //   return time.getHours() > 12 ? "text-success" : "text-error";
  // };
  // console.log(pickupLocation);
  // useEffect(() => {
  //   fetchPickLocation();
  // }, []);

  const [roundTrip, setRoundTrip] = useState("OneWay");

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
                <label className="radio-label">
                  One-way
                  <input
                    type="radio"
                    name="radio"
                    id="one-way"
                    onChange={(e) => setRoundTrip("OneWay", e.target.checked)}
                    defaultChecked={roundTrip}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-label">
                  Return
                  <input
                    type="radio"
                    name="radio"
                    id="return"
                    onChange={(e) =>
                      setRoundTrip("roundTrip", e.target.checked)
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              {/* RETURN SEARCH  */}
              {roundTrip === "roundTrip" ? (
                <>
                  <div className="d-flex mb-1 ">
                    <Col className="input-col">
                      <input
                        className="search-input"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter pick-up location "
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
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
                        value={dropLocation}
                        onChange={(e) => setDropLocation(e.target.value)}
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
                    {/* <Col xs={12} md="auto">
     <Button className="btn-search-button">Search</Button>{" "}
   </Col> */}
                  </div>
                </>
              ) : (
                ""
              )}
              {/* SEARCH ROUNDTRIP */}

              <div className="d-flex search-roundTrip ">
                <Col className="input-col">
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter pick-up location "
                    value={pickupLocation}
                    // ref={ref}
                    // defaultValue={
                    //   state.formSearchTransfer.pickUpLocation.location
                    // }
                    onChange={(e) => setPickupLocation(e.target.value)}
                    onChange={(e) => fetchPickLocation(e.target.value)}
                  />
                  <ImLocation className="location-icon" />
                </Col>
                {/* state.formSearchTransfer.selectedPickLocation? */}
                {state.formSearchTransfer.pickUpLocation.length > 1 ? (
                  <AutoComplete pickLocation={pickLocation} />
                ) : state.formSearchTransfer.selectedPickLocation ? (
                  ""
                ) : (
                  ""
                )}
                {/* pickupLocation={pickLocation} */}
                <Col className="input-col">
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                    // ref={ref}
                    // defaultValue={
                    //   state.formSearchTransfer.pickUpLocation.location
                    // }
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    onChange={(e) => fetchDropLocation(e.target.value)}
                  />
                  <ImLocation className="location-icon" />
                </Col>
                {state.formSearchTransfer.dropLocation.length > 1 ? (
                  <AutoCompleteDrop getDropLocation={getDropLocation} />
                ) : state.formSearchTransfer.selectedPickLocation ? (
                  ""
                ) : (
                  ""
                )}
                <Col>
                  <input
                    className="date-pick"
                    type="datetime-local"
                    name=""
                    id=""
                    value={pickUpDate}
                    onChange={(e) =>
                      handlerData(" arrivalDate", e.target.value)
                    }
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
                  <Button type="submit" className="btn-search-button">
                    Search
                  </Button>{" "}
                </Col>
              </div>
            </Row>
          </Form>
        </Row>
      </Container>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
