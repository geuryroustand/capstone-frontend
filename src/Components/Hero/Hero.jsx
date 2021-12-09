import "./Hero.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import "react-datepicker/dist/react-datepicker-cssmodules.css";

import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import {
  fetchLocations,
  selectedDropLocation,
  selectedPickLocation,
} from "../../action";
import { connect, useSelector } from "react-redux";
import { AutoCompletePick } from "../Autocomplete/AutoCompletePick";
import { AutoCompleteDrop } from "../Autocomplete/AutoCompleteDrop";
import { useHistory } from "react-router";

const mapDispatchToProps = (dispatch) => ({
  fetchPickLocation: (searchPick) => dispatch(fetchLocations(searchPick)),
  sendPickLocation: (location) => dispatch(selectedPickLocation(location)),
  sendDropLocation: (location) => dispatch(selectedDropLocation(location)),
});

const mapStateToProps = (state) => state;

const Hero = ({ fetchPickLocation, sendPickLocation, sendDropLocation }) => {
  const state = useSelector((state) => state);
  const [roundTrip, setRoundTrip] = useState("OneWay");

  const [startDate, setStartDate] = useState(new Date());
  const [startDateDeparture, setStartDateDeparture] = useState(new Date());

  const [dataToSend, setDataToSend] = useState({
    pickupLocation: "",
    dropLocation: "",

    // arrivalDate: startDate,
    // departureDate: startDateDeparture,
    passengers: "",
  });

  useEffect(() => {
    fetchPickLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerData = (key, value) => {
    setDataToSend({
      ...dataToSend,
      [key]: value,
    });

    if (key === "pickupLocation") {
      let matches = state.formSearchTransfer.locations.filter((los) =>
        los.location.toLowerCase().includes(value.toLowerCase())
      );

      sendPickLocation(matches);
    }

    if (key === "dropLocation") {
      let matches = state.formSearchTransfer.locations.filter((los) =>
        los.location.toLowerCase().includes(value.toLowerCase())
      );

      // let matches = state.formSearchTransfer.locations.filter((lo) => {
      //   const regex = new RegExp(`${value}`, "gi");
      //   return lo.location.match(regex);
      // });

      sendDropLocation(matches);
    }
  };
  const history = useHistory();

  const handlerSubmit = async (e) => {
    try {
      e.preventDefault();

      history.push(
        `/bookingDetails?pickUpLocation=${dataToSend.pickupLocation}&dropLocation=${dataToSend.dropLocation}&arrivalDate=${startDate}&departureDate=${startDateDeparture}&journey=${roundTrip}&passengers=${dataToSend.passengers}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPickLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let handleColor = (time) => {
  //   return time.getHours() > 12 ? "text-success" : "text-error";
  // };

  return (
    <header className="hero">
      <Container>
        <Row className="pt-5">
          <h1 className="heading-h1">Reliable, low cost airport transfers</h1>

          <h3 className="heading-h3">
            Easy airport transfers to and from your accommodation
          </h3>
        </Row>

        <Row>
          <Form className="form-search-main" inline onSubmit={handlerSubmit}>
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
                    // defaultChecked={roundTrip === "roundTrip" ? roundTrip : ""}
                    // onChange={(e) => handlerData("roundTrip")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              {/* RETURN SEARCH  */}
              {roundTrip === "roundTrip" ? (
                <>
                  <Row className="d-flex mb-1 ">
                    <Col lg="auto" className="input-col media-queries">
                      <input
                        className="search-input"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter pick-up location "
                        value={dataToSend.pickupLocation}
                        // onChange={(e) => setPickupLocation(e.target.value)}
                      />

                      <ImLocation className="location-icon " />
                    </Col>
                    <Col lg="auto" className="input-col media-queries">
                      <input
                        className="search-input"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter destination "
                        required
                        value={dataToSend.dropLocation}
                        // onChange={(e) => setDropLocation(e.target.value)}
                      />
                      <ImLocation className="location-icon" />
                    </Col>

                    {/* <Col>
                      <input
                        className="date-pick"
                        type="datetime-local"
                        value={dataToSend.departureDate}
                        onChange={(e) =>
                          handlerData("departureDate", e.target.value)
                        }
                        name=""
                        id=""
                        required
                      />
                    </Col> */}

                    {/* DATE PICKED */}
                    <Col lg="auto" className="date-picker-col">
                      <DatePicker
                        // showTimeSelect
                        selected={startDateDeparture}
                        // selected={dataToSend.arrivalDate}
                        onChange={(date) => setStartDateDeparture(date)}
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
                    </Col>

                    <Col className="select-passenger-section">
                      <select
                        name="passenger"
                        id="passenger"
                        className="select-passenger"
                        required
                        value={dataToSend.passengers}
                        onChange={(e) =>
                          handlerData("passengers", e.target.value)
                        }
                      >
                        {/* <option value="passenger">Passenger</option> */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                      <FaUserAlt className="user-icon" />
                    </Col>
                    {/* <Col xs={12} md="auto">
     <Button className="btn-search-button">Search</Button>{" "}
   </Col> */}
                  </Row>
                </>
              ) : (
                ""
              )}
              {/* SEARCH ROUNDTRIP */}

              <Row className="d-flex search-roundTrip ">
                <Col lg="auto" className="input-col media-queries">
                  <input
                    className="search-input"
                    required
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter pick-up location "
                    value={dataToSend.pickupLocation}
                    onChange={(e) =>
                      handlerData("pickupLocation", e.target.value)
                    }
                  />

                  <ImLocation className="location-icon" />
                </Col>

                {state.formSearchTransfer.pickUpLocation.length > 1 ? (
                  <AutoCompletePick
                    handlerPickLocationAutoComplete={handlerData}
                  />
                ) : state.formSearchTransfer.selectedPickLocation ? (
                  ""
                ) : (
                  ""
                )}
                <Col lg="auto" className="input-col media-queries ">
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                    required
                    value={dataToSend.dropLocation}
                    onChange={(e) =>
                      handlerData("dropLocation", e.target.value)
                    }
                  />

                  <ImLocation className="location-icon" />
                </Col>
                {state.formSearchTransfer.dropLocation.length > 1 ? (
                  <AutoCompleteDrop
                    handlerDropLocationAutoComplete={handlerData}
                  />
                ) : state.formSearchTransfer.selectedPickLocation ? (
                  ""
                ) : (
                  ""
                )}

                {/* DATE PICKED */}
                <Col lg="auto" className="date-picker-col">
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
                </Col>

                {/* <Col>
                  <input
                    className="date-pick"
                    type="datetime-local"
                    required
                    name=""
                    id=""
                    value={dataToSend.arrivalDate}
                    onChange={(e) => handlerData("arrivalDate", e.target.value)}
                  />
                </Col> */}

                <Col className=" select-passenger-section">
                  <select
                    name="passenger"
                    id="passenger"
                    className="select-passenger"
                    required
                    value={dataToSend.passengers}
                    onChange={(e) => handlerData("passengers", e.target.value)}
                  >
                    {/* <option value="passenger">Passenger</option> */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                    <option value="6">6</option>
                  </select>
                  <FaUserAlt className="user-icon" />
                </Col>

                <Col>
                  <Button type="submit" className="btn-search-button">
                    Search
                  </Button>{" "}
                </Col>
              </Row>
            </Row>
          </Form>
        </Row>
      </Container>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
