import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import { AutoCompletePickSharedRide } from "../Autocomplete/AutoCompletePickSharedRide";
import { AutoCompleteDrop } from "../Autocomplete/AutoCompleteDrop";
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

      console.log("matches", matches);
      // {
      //   const regex = new RegExp(`${value}`, "gi");

      //   return lo.location.match(regex);
      // }
      dispatch(selectedSharedRidePickLocation(matches));
    }

    if (key === "dropLocation") {
      let matches = state.formSearchTransfer.locations.filter((lo) => {
        let regex = new RegExp(`${value}`, "gi");
        return lo.location.match(regex);
      });

      dispatch(selectedSharedRideDropLocation(matches));
    }
  };

  const handlerPickLocationAutoComplete = (lo) => {
    const { location } = lo;

    setDataToSend({
      pickupLocation: location,
    });
    console.log("ssse", location);
    // setPickupLocation(lo.location);
  };

  return (
    <header className="hero">
      <Container>
        <Row className="pt-5">
          <h1 className="heading-h1">Reliable, low cost airport transfers</h1>

          <h3>Easy airport transfers to and from your accommodation</h3>
        </Row>

        <Row>
          <Form
            inline
            //  onSubmit={handlerSubmit}
          >
            <Row className="search-form mt-5 ">
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
                    required
                    value={dataToSend.pickupLocation || ""}
                    onChange={(e) =>
                      handlerDataToSend("pickupLocation", e.target.value)
                    }
                  />

                  <ImLocation className="location-icon" />
                </Col>
                {
                  // dataToSend.pickupLocation.length > 1 ? (
                  //   <AutoCompletePickSharedRide
                  //     handlerPickLocationAutoComplete={
                  //       handlerPickLocationAutoComplete
                  //     }
                  //   />
                  // ) : state.formSearchTransfer.pickUpSharedRideLocation ? (
                  //   ""
                  // ) : (
                  //   ""
                  // )

                  state.formSearchTransfer.pickUpSharedRideLocation.length >
                  1 ? (
                    <AutoCompletePickSharedRide
                      handlerPickLocationAutoComplete={
                        handlerPickLocationAutoComplete
                      }
                    />
                  ) : state.formSearchTransfer.pickUpSharedRideLocation ? (
                    ""
                  ) : (
                    ""
                  )
                }

                {/* <AutoCompleteDrop /> */}
                <Col className="input-col">
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                    required
                    value={dataToSend?.dropLocation || ""}
                    onChange={(e) =>
                      handlerDataToSend("dropLocation", e.target.value)
                    }
                  />

                  <ImLocation className="location-icon" />
                </Col>
                {/* DATE PICKED */}
                {/* <Col>
                  <DatePicker
                    showTimeSelect
                    selected={startDate}
                    // selected={dataToSend.arrivalDate}
                    onChange={(date) => setStartDate(date)}
                    // timeClassName={handleColor}
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
                    withPortal
                    className="date-pick"
                    required
                    // value={dataToSend.arrivalDate}
                    // onChange={(e) => handlerData("arrivalDate", e.target.value)}
                  />
                </Col> */}
                <Col>
                  <input
                    className="date-pick"
                    type="datetime-local"
                    required
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
                  <FaUserAlt className="user-icon" />
                </Col>
                <Col xs={12} md="auto">
                  <Button type="submit" className="btn-search-button">
                    Search
                  </Button>
                </Col>
              </div>
            </Row>
          </Form>
        </Row>
      </Container>
    </header>
  );
};

export default SharedRide;
