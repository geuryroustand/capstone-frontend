import React, { useState } from "react";

import "./PostSharedRide.css";
// keyup
import { Container, Row, Form, Button, Col, Modal } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { postSharedRide } from "../../action/postSharedRide";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const PostSharedRide = () => {
  const [locationsFetch, setLocationsFetch] = useState({
    searchResults: [],
    noSearch: true,
  });
  const dispatch = useDispatch();

  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [passenger, setPassenger] = useState("");

  const searchLocation = async (e) => {
    try {
      e.preventDefault();
      let searchPickLocation = e.target.value.trim();

      const response = await fetch(
        `${
          process.env.REACT_APP_API_PROD_URL ||
          process.env.REACT_APP_API_DEV_URL
        }/locations/search`,

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
        setLocationsFetch({
          ...locationsFetch,
          searchResults: getDestinations,
          noSearch: !false,
        });
      }
    } catch (error) {
      console.log(error);

      setLocationsFetch({
        noSearch: true,
      });
      return;
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handlerInput = (LocationSelected) => {
    if (!pickLocation.length > 0) {
      setPickLocation(LocationSelected.location);
      handleClose();
    }

    if (pickLocation.length) {
      setDropLocation(LocationSelected.location);
      handleClose();
    }
  };

  const { login } = useSelector((state) => state.auth);

  const history = useHistory();
  const location = useLocation();
  const selectedInfo = localStorage.getItem("selectedInfo");
  const parseSelectedInfo = JSON.parse(selectedInfo);

  console.log(parseSelectedInfo);
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(postSharedRide({ pickLocation, dropLocation, passenger }));

    if (!login) {
      localStorage.setItem("lastPath", location.pathname);
      localStorage.setItem(
        "selectedInfo",
        JSON.stringify({
          pickLocation,
          dropLocation,
          passenger,
        })
      );

      history.push("/signIn?signIn=signIn");
      return;
    }
    history.push("/postRide");
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

        <Row>
          <Form
            onSubmit={handlerSubmit}
            inline
            className="post-form-shared-ride-search"
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
                    defaultValue={
                      pickLocation
                        ? pickLocation
                        : parseSelectedInfo?.pickLocation
                    }
                    placeholder="Enter pick-up location "
                  />

                  <ImLocation className="post-shared-ride-location-icon" />
                </div>

                <div className=" mt-3 post-shared-ride-input-col post-shared-ride-search-input">
                  <input
                    onClick={() => setShow(true)}
                    className="post-shared-ride-input"
                    type="text"
                    name=""
                    id=""
                    defaultValue={
                      dropLocation
                        ? dropLocation
                        : parseSelectedInfo?.dropLocation
                    }
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
                    onChange={(e) => setPassenger(e.target.value)}
                    value={passenger ? passenger : parseSelectedInfo?.passenger}
                    name="passenger"
                    id="passenger"
                    className=" post-shared-ride-select-passenger"
                    required
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
                  Continue
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
          <Modal.Body>
            <Form>
              <Form.Group closeButton>
                {!pickLocation ? (
                  <Form.Control
                    onKeyUp={searchLocation}
                    type="text"
                    placeholder="From"
                    className="form-post-share-ride-search-label"
                  />
                ) : (
                  <Form.Control
                    onKeyUp={searchLocation}
                    type="text"
                    placeholder="To"
                    className="form-post-share-ride-search-label"
                  />
                )}
              </Form.Group>
            </Form>

            <ul>
              {locationsFetch.noSearch ? (
                locationsFetch.searchResults?.map((lo, i) => (
                  <li onClick={() => handlerInput(lo)} key={i}>
                    {lo.location}
                  </li>
                ))
              ) : (
                <li>Sorry. No Results</li>
              )}
            </ul>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default PostSharedRide;
