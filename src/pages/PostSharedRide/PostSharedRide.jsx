import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PostSharedRide.css";
// keyup
import { Container, Row, Form, Button, Col, Modal } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { postSharedRide } from "../../action/postSharedRide";

const PostSharedRide = () => {
  const [modalShow, setModalShow] = useState(false);
  const [locationsFetch, setLocationsFetch] = useState([]);
  const dispatch = useDispatch();

  const [pickLocation, setPickLocation] = useState("");

  const searchLocation = async (e) => {
    try {
      e.preventDefault();
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
        const getDestinations = await response.json();
        setLocationsFetch(getDestinations);
        // dispatch(postSharedRide(getDestinations));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlerInput = (LocationSelected) => {
    setPickLocation(LocationSelected.location);
    handleClose();
  };

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
                    onClick={() => setShow(true)}
                    className=" post-shared-ride-input"
                    required
                    type="text"
                    name=""
                    id=""
                    defaultValue={pickLocation}
                    placeholder="Enter pick-up location "
                  />

                  <ImLocation className="post-shared-ride-location-icon" />
                </div>

                <div className=" mt-3 post-shared-ride-input-col post-shared-ride-search-input">
                  <input
                    // onClick={() => setModalShow(true)}
                    className="post-shared-ride-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter destination "
                    required
                  />

                  <ImLocation className="post-shared-ride-location-icon" />
                </div>

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

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-10w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <Form>
              <Form.Group closeButton>
                <Form.Control
                  onKeyUp={searchLocation}
                  type="text"
                  placeholder="From"
                  className="form-post-share-ride-search-label"
                />
              </Form.Group>
            </Form>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}

            <ul>
              {locationsFetch.map((lo, i) => (
                <li onClick={() => handlerInput(lo)} key={i}>
                  {lo.location}
                </li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default PostSharedRide;
