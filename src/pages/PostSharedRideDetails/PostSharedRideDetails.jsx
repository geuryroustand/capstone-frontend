import { WiDirectionRight } from "react-icons/wi";
import { AiOutlineComment } from "react-icons/ai";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import "./PostSharedRideDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sharedRideDetails } from "../../action/sharedRideDetails";
import format from "date-fns/format/index";

const PostSharedRideDetails = () => {
  const { sharedRide } = useSelector((state) => state.searchSharedRide);
  const state = useSelector((state) => state.sharedRideDetails);

  const [sharedRideInfo] = sharedRide;

  const { auth } = useSelector((state) => state);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const handlerCommentsSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("accessToken");

      const response = await fetch(
        `${process.env.REACT_APP_API_DEV_URL}/shared-ride/comments`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment,
            postId: sharedRideInfo._id,
          }),
        }
      );

      if (response.ok) {
        setComment("");
        const post = await response.json();
        dispatch(sharedRideDetails(post));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="container-main">
        <h2 className="heading-postRideDetails">
          {/* Sat, 4 December */}
          {format(
            new Date(state.sharedRideDetails.serviceDate),
            "EEEEEE , PPP"
          )}
        </h2>

        <div className="d-flex mt-5 mb-4 postRideLocationInfo">
          <p>{state.sharedRideDetails.pickLocation}</p>
          <WiDirectionRight className="postRide-direction-icon" />
          {/* <WiDirectionDown /> */}
          <p className="ml-2">{state.sharedRideDetails.dropLocation}</p>
        </div>

        <Row className="postRideDetails-main">
          <Col>
            <div className="d-flex mt-4 postRideDetails ">
              <p>
                Arriving <span className="arriving-info"> on flight</span>{" "}
              </p>
            </div>
            {/* <p className="postRideDetails-border-line"></p> */}
            {/* <div className="d-flex  postRideDetails">
            <p>08:00</p>
            <p className="ml-5">Bahia Principe Samana</p>
          </div> */}
          </Col>

          <Col>
            <div className="postSharedRideFlightInfo">
              <p>
                Airline Name:
                <span className="ml-2">
                  {state.sharedRideDetails.airlineName}
                </span>
              </p>
              <p>Flight Number: {state.sharedRideDetails.flightNumber}</p>
              <span>
                At:
                {format(new Date(state.sharedRideDetails.serviceDate), "HH:mm")}
              </span>
            </div>
          </Col>
          <hr />
        </Row>

        <hr />

        <Row className="postSharedRide-user-info">
          <Col className="d-flex">
            <img
              className="postSharedRide-profile"
              src={state.sharedRideDetails.user.avatar}
              alt=""
            />
            <p className="ml-2 mt-3  postSharedRide-user-name">
              {state.sharedRideDetails.user.name}{" "}
              {state.sharedRideDetails.user.surname}
            </p>
          </Col>

          <Col>
            <p>{state.sharedRideDetails.travelerCommentRequest}</p>
          </Col>
        </Row>
        <hr />

        <Row className="postSharedRideCommentsSection">
          <div className="mb-4 commentsPostSharedSection">
            <AiOutlineComment className="commentsPostSharedRideIcon" />
            Comments
          </div>
          {state?.sharedRideDetails.comments.length > 0 && (
            <div className="postSharedRideCommentsList">
              {state?.sharedRideDetails.comments.map((com, i) => (
                <>
                  <Row key={i} className="bg-comment-section">
                    <Col xs="12" md="12" lg="4">
                      <div className="d-flex">
                        <img
                          className="postSharedRide-profile"
                          src={com.avatar}
                          alt=""
                        />
                        <p className="ml-2 mt-3  postSharedRide-user-name">
                          {com.name} {com.surname}
                        </p>
                      </div>
                    </Col>

                    <Col xs="12" md="12" lg="8" className="mt-3">
                      {com.comment}
                    </Col>
                  </Row>
                  <hr />
                </>
              ))}
            </div>
          )}

          <Form
            xs="12"
            className="postSharedRideForm mt-3"
            onSubmit={handlerCommentsSubmit}
          >
            {/* <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group> */}

            <Form.Group>
              <Form.Control
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment..."
                as="textarea"
                rows={3}
              />
            </Form.Group>

            {/* <div>
              <textarea
                className="textarea-comment"
                value={comment}
                onChange={handlerInput}
                name=""
                id=""
              ></textarea>
            </div> */}

            {auth.login ? (
              <button type="submit" className="btn-postSharedRide">
                Send
              </button>
            ) : (
              <Link className="btn-not-login-user" to="/signIn">
                Sign in to leave a comment
              </Link>
            )}
          </Form>
        </Row>
      </div>
    </Container>
  );
};

export default PostSharedRideDetails;
