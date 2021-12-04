import { WiDirectionDown, WiDirectionRight } from "react-icons/wi";
import { AiOutlineComment } from "react-icons/ai";
import { Form } from "react-bootstrap";
import React from "react";
import "./PostSharedRideDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import avatar from "../../avatar.png";

const PostSharedRideDetails = () => {
  const state = useSelector((state) => state.searchSharedRide);

  console.log(state);

  return (
    <Container>
      <div className="container-main">
        <h2 className="heading-postRideDetails">Sat, 4 December</h2>

        <div className="d-flex mt-5 mb-4 postRideLocationInfo">
          <p>Samana Airport</p>
          <WiDirectionRight className="postRide-direction-icon" />
          {/* <WiDirectionDown /> */}
          <p className="ml-2">Bahia Principe</p>
        </div>

        <Row className="postRideDetails-main">
          <Col>
            <div className="d-flex mt-4 postRideDetails ">
              <p>
                Arriving to{" "}
                <span className="arriving-info"> Samana Airport </span>{" "}
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
                <span className="ml-2"></span> Air Canada
              </p>
              <p>Flight Number: 4523</p>
              <span>At: 20:50</span>
            </div>
          </Col>
          <hr />
        </Row>

        <hr />

        <Row className="postSharedRide-user-info">
          <Col className="d-flex">
            <img className="postSharedRide-profile" src={avatar} alt="" />
            <p className="ml-2 mt-3  postSharedRide-user-name">Luis Martinez</p>
          </Col>

          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              dolores.
            </p>
          </Col>
        </Row>
        <hr />

        <Row className="postSharedRideCommentsSection">
          <div className="mb-4 commentsPostSharedSection">
            <AiOutlineComment className="commentsPostSharedRideIcon" />
            Comments
          </div>

          <div className="postSharedRideCommentsList">
            <Row className="bg-comment-section">
              <Col xs="12" md="12" lg="4">
                <div className="d-flex">
                  <img className="postSharedRide-profile" src={avatar} alt="" />
                  <p className="ml-2 mt-3  postSharedRide-user-name">
                    Luis Martinez
                  </p>
                </div>
              </Col>

              <Col xs="12" md="12" lg="8" className="mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
                unde?
              </Col>
            </Row>
            <hr />

            <Row className="bg-comment-section">
              <Col xs="12" md="12">
                <div className="d-flex">
                  <img className="postSharedRide-profile" src={avatar} alt="" />
                  <p className="ml-2 mt-3  postSharedRide-user-name">
                    Luis Martinez
                  </p>
                </div>
              </Col>

              <Col xs="12" md="12" lg="" className="mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
                unde?
              </Col>
            </Row>
            <hr />

            <Row className="bg-comment-section">
              <Col xs="12" md="12">
                <div className="d-flex">
                  <img className="postSharedRide-profile" src={avatar} alt="" />
                  <p className="ml-2 mt-3  postSharedRide-user-name">
                    Luis Martinez
                  </p>
                </div>
              </Col>

              <Col xs="12" md="12" className="mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
                unde?
              </Col>
            </Row>
          </div>
          <Form xs="12" className="postSharedRideForm mt-3">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control placeholder="Comment..." as="textarea" rows={3} />
            </Form.Group>

            <button type="submit" className="btn-postSharedRide">
              Send
            </button>
          </Form>
        </Row>
      </div>
    </Container>
  );
};

export default PostSharedRideDetails;
