import "./Hero.css";
import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
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
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");

  const [dataToSend, setDataToSend] = useState({
    pickupLocation: pickupLocation,
    dropLocation: dropLocation,
    arrivalDate: "",
    departureDate: "",
    passengers: "",
  });

  // const [startDate, setStartDate] = useState(new Date());

  const handlerPickLocationAutoComplete = (lo) => {
    setPickupLocation(lo.location);
  };

  const handlerDropLocationAutoComplete = (lo) => {
    setDropLocation(lo.location);
  };

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
      let matches = state.formSearchTransfer.locations.filter((lo) => {
        let regex = new RegExp(`${value}`, "gi");

        return lo.location.match(regex);
      });
      sendPickLocation(matches);
    }

    if (key === "dropLocation") {
      let matches = state.formSearchTransfer.locations.filter((lo) => {
        const regex = new RegExp(`${value}`, "gi");

        return lo.location.match(regex);
      });
      sendDropLocation(matches);
    }
  };
  const history = useHistory();

  const handlerSubmit = async (e) => {
    try {
      e.preventDefault();

      history.push(
        `/bookingDetails?pickUpLocation=${pickupLocation}&dropLocation=${dropLocation}&arrivalDate=${dataToSend.arrivalDate}&departureDate=${dataToSend.departureDate}&journey=${roundTrip}&passengers=${dataToSend.passengers}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  // let handleColor = (time) => {
  //   return time.getHours() > 12 ? "text-success" : "text-error";
  // };
  // console.log(pickupLocation);
  // useEffect(() => {
  //   fetchPickLocation();
  // }, []);

  return (
    <header className="hero">
      <Container>
        <Row className="pt-5">
          <h1 className="heading-h1">Reliable, low cost airport transfers</h1>

          <h3>Easy airport transfers to and from your accommodation</h3>
        </Row>

        <Row>
          <Form inline onSubmit={handlerSubmit}>
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
                    // defaultChecked={dataToSend.roundTrip}
                    // onChange={(e) => handlerData("roundTrip")}
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
                        disabled
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
                        disabled
                        id=""
                        placeholder="Enter destination "
                        required
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
                        value={dataToSend.departureDate}
                        onChange={(e) =>
                          handlerData("departureDate", e.target.value)
                        }
                        name=""
                        id=""
                      />
                    </Col>
                    <Col className="input-col select-passenger-section">
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
                    required
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter pick-up location "
                    value={
                      pickupLocation
                        ? pickupLocation
                        : dataToSend.pickupLocation
                    }
                    onChange={(e) =>
                      handlerData("pickupLocation", e.target.value)
                    }
                  />

                  <ImLocation className="location-icon" />
                </Col>
                {state.formSearchTransfer.pickUpLocation.length > 1 ? (
                  <AutoCompletePick
                    handlerPickLocationAutoComplete={
                      handlerPickLocationAutoComplete
                    }
                  />
                ) : state.formSearchTransfer.selectedPickLocation ? (
                  ""
                ) : (
                  ""
                )}
                <Col className="input-col">
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                    required
                    value={
                      dropLocation ? dropLocation : dataToSend.dropLocation
                    }
                    onChange={(e) =>
                      handlerData("dropLocation", e.target.value)
                    }
                  />

                  <ImLocation className="location-icon" />
                </Col>
                {state.formSearchTransfer.dropLocation.length > 1 ? (
                  <AutoCompleteDrop
                    handlerDropLocationAutoComplete={
                      handlerDropLocationAutoComplete
                    }
                  />
                ) : state.formSearchTransfer.selectedPickLocation ? (
                  ""
                ) : (
                  ""
                )}
                <Col>
                  <input
                    className="date-pick"
                    type="datetime-local"
                    required
                    name=""
                    id=""
                    value={dataToSend.arrivalDate}
                    onChange={(e) => handlerData("arrivalDate", e.target.value)}
                  />
                </Col>
                <Col className="input-col select-passenger-section">
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
