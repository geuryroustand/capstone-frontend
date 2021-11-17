import React, { useState, useEffect } from "react";
import "./SharedRide.css";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AutoCompletePickSharedRide } from "../Autocomplete/AutoCompletePickSharedRide";
import { AutoCompleteDropSharedRide } from "../Autocomplete/AutoCompleteDropSharedRide";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import {
  fetchLocations,
  selectedSharedRideDropLocation,
  selectedSharedRidePickLocation,
} from "../../action";
import { useDispatch } from "react-redux";

const SharedRide = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetchLocations();
  }, []);

  const [dataToSend, setDataToSend] = useState({
    pickupLocation: "",
    dropLocation: "",
    arrivalDate: "",
    passengers: "",
  });

  const handlerDataToSend = (key, value) => {
    setDataToSend({
      ...dataToSend,
      [key]: value,
    });

    if (key === "pickupLocation") {
      let matches = state.formSearchTransfer.locations.filter((los) =>
        los.location.toLowerCase().includes(value.toLowerCase())
      );

      dispatch(selectedSharedRidePickLocation(matches));
    }

    if (key === "dropLocation") {
      let matches = state.formSearchTransfer.locations.filter((los) =>
        los.location.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(selectedSharedRideDropLocation(matches));
    }
  };

  return (
    <header className="shared-ride-hero">
      <Container>
        <Row className="shared-ride-pt-5">
          <h1 className="shared-ride-heading-h1">
            Reliable, low cost airport transfers
          </h1>

          <h3 className="shared-ride-heading-h3">
            Easy airport transfers to and from your accommodation
          </h3>
        </Row>

        <Row>
          <Form
            inline
            className="form-shared-ride-search"
            //  onSubmit={handlerSubmit}
          >
            <Row className="shared-ride-search-form mt-5 ">
              {/* SEARCH ROUNDTRIP */}

              <Row className="shared-ride-d-flex search-roundTrip ">
                <Col
                  lg="auto"
                  className="shared-ride-input-col shared-ride-media-queries  "
                >
                  <input
                    className="shared-ride-search-input"
                    required
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter pick-up location "
                    required
                    value={dataToSend.pickupLocation}
                    onChange={(e) =>
                      handlerDataToSend("pickupLocation", e.target.value)
                    }
                  />

                  <ImLocation className="shared-ride-location-icon" />
                </Col>
                {state.formSearchTransfer.pickUpSharedRideLocation.length >
                  1 && (
                  <AutoCompletePickSharedRide
                    handlerPickLocationAutoComplete={handlerDataToSend}
                  />
                )}

                {/* <AutoCompleteDrop /> */}
                <Col
                  lg="auto"
                  className="shared-ride-input-col shared-ride-media-queries "
                >
                  <input
                    className="shared-ride-search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                    required
                    value={dataToSend.dropLocation}
                    onChange={(e) =>
                      handlerDataToSend("dropLocation", e.target.value)
                    }
                  />

                  <ImLocation className="shared-ride-location-icon" />
                </Col>
                {state.formSearchTransfer.dropSharedRideLocation.length > 1 && (
                  <AutoCompleteDropSharedRide
                    handlerDropLocationAutoComplete={handlerDataToSend}
                  />
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
                    className="shared-ride-date-pick"
                    type="datetime-local"
                    required
                    name=""
                    id=""
                  />
                </Col> */}

                <Col
                  lg="auto"
                  className=" shared-ride-select-passenger-section "
                >
                  <select
                    name="passenger"
                    id="passenger"
                    className="shared-ride-select-passenger"
                    required
                    value={dataToSend.passengers}
                    onChange={(e) => handlerDataToSend(e.target.value)}
                  >
                    {/* <option value="passenger">Passenger</option> */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <FaUserAlt className="shared-ride-user-icon" />
                </Col>
                <Col>
                  <Button
                    type="submit"
                    className="shared-ride-btn-search-button"
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Row>
          </Form>
        </Row>
      </Container>
    </header>
  );
};

export default SharedRide;
