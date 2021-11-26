import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PostSharedRide.css";
// keyup
import { Container, Row, Form, Button, Col, Modal } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

// my name is Geury Roustand and im a full stack developer
// My project its base in real project need , its a like a travel agency
// where The travelers can search for private airport transfer
// and also can post

const PostSharedRide = () => {
  const [modalShow, setModalShow] = useState(false);
  const [locationsFetch, setLocationsFetch] = useState("");
  const searchLocation = async (e) => {
    try {
      let searchPickLocation = e.target.value.trim();

      const response = await fetch(
        `${process.env.REACT_APP_API_DEV_URL}/locations/search`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ location: searchPickLocation }),
        }
      );

      if (response.ok) {
        const location = await response.json();

        console.log(location);
        // setLocationsFetch(Location);
        // setLocationsFetch(Location);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(locationsFetch);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton
        className="modal-main"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="From"
                className="form-post-share-ride-search-label"
              />
            </Form.Group>
          </Form>

          <ul>
            <li>Samana</li>
            <li>Samana</li>
            <li>Samana</li>
            <li>Samana</li>
          </ul>
        </Modal.Body>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  return (
    <div className="post-shared-ride-bg">
      <Container>
        <Row>
          <Col className="mt-5 ">
            <h1 className="post-shared-ride-heading">
              Save on travel{" "}
              <span className="heading-mixed-color"> costs </span> by sharing
              your ride with
              <span className="heading-mixed-color"> passengers. </span>
            </h1>
          </Col>
        </Row>
        {/* Form  */}
        <Row>
          <Form
            inline
            className="post-form-shared-ride-search"
            // onSubmit={handlerSubmit}
          >
            <Row className="post-shared-ride-search-form mt-5 ">
              {/* SEARCH ROUNDTRIP */}

              <Row className="  ">
                <div className="post-shared-ride-input-col  post-shared-ride-search-input">
                  <input
                    onKeyUp={searchLocation}
                    className=" post-shared-ride-input"
                    required
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter pick-up location "

                    // onChange={(e) =>
                    //   handlerDataToSend("pickupLocation", e.target.value)
                    // }
                    // value={dataToSend.pickupLocation}
                  />

                  <ImLocation className="post-shared-ride-location-icon" />
                </div>

                {/* {state.formSearchTransfer.pickUpSharedRideLocation.length >
                  1 && (
                  <AutoCompletePickSharedRide
                    handlerPickLocationAutoComplete={handlerDataToSend}
                  />
                )} */}

                {/* <AutoCompleteDrop /> */}
                {/* <Col
                  lg="auto"
                  className="post-shared-ride-input-col post-shared-ride-media-queries "
                > */}

                <div className=" mt-3 post-shared-ride-input-col post-shared-ride-search-input">
                  <input
                    onClick={() => setModalShow(true)}
                    className="post-shared-ride-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                    required
                    // value={dataToSend.dropLocation}
                    // onChange={(e) =>
                    //   handlerDataToSend("dropLocation", e.target.value)
                    // }
                  />

                  <ImLocation className="post-shared-ride-location-icon" />
                </div>

                {/* {state.formSearchTransfer.dropSharedRideLocation.length > 1 && (
                  <AutoCompleteDropSharedRide
                    handlerDropLocationAutoComplete={handlerDataToSend}
                  />
                )} */}

                <div
                  lg="auto"
                  className=" mt-3 post-shared-ride-select-passenger-section "
                >
                  <select
                    name="passenger"
                    id="passenger"
                    className=" post-shared-ride-select-passenger"
                    required
                    // value={dataToSend.passengers}
                    // onChange={(e) =>
                    //   handlerDataToSend("passengers", e.target.value)
                    // }
                  >
                    <option value="passenger">Passenger</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <FaUserAlt className=" mt-2 post-shared-ride-user-icon" />
                </div>

                <Button
                  type="submit"
                  className="post-shared-ride-btn-search-button"
                >
                  Post a share ride
                </Button>
              </Row>
            </Row>
          </Form>
        </Row>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
};

export default PostSharedRide;
