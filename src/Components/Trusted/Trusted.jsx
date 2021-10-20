import React from "react";
import "./Trusted.css";
import { Col, Container, Row } from "react-bootstrap";

import { FaPlane } from "react-icons/fa";
import { BsCreditCard2Back, BsCheckLg } from "react-icons/bs";

export const Trusted = () => {
  return (
    <div className="trusted-home">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="d-flex mt-5">
              <FaPlane className="airplane-icon" />
              <div>
                <h3>Flight tracking</h3>
                <p>
                  Your driver tracks your flight <br />
                  and waits for you if it's delayed
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex mt-5">
              <div className="credit-card-icon">
                <BsCreditCard2Back className="credit-card-icon-top" />
              </div>
              <div>
                <h3>One clear price</h3>
                <p>
                  Your price is confirmed upfront <br />– no extra costs, no
                  cash required
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="d-flex mt-5">
              <div className="check-icon">
                <BsCheckLg />
                {/* <BsCreditCard2Back className="credit-card-icon-top" /> */}
              </div>
              <div>
                <h3>Tried and trusted</h3>
                <p>
                  We work with professional drivers <br />
                  and have 24/7 customer care
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
