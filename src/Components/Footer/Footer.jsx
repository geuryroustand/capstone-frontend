import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <Container className="footer">
        <Row>
          <Col xs={12} md={4}>
            <ul>
              <p>
                <Link to="#">How it works</Link>
              </p>
              <p>
                <Link to="#">Shared Ride Info</Link>
              </p>
              <p>
                <Link to="#">Destinations</Link>
              </p>
              <p>
                <Link to="#">Airports</Link>
              </p>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <ul>
              <p>
                <Link to="#">About Us</Link>
              </p>
              <p>
                <Link to="#">Help Centre</Link>
              </p>
              <p>
                <Link to="#">Terms and Conditions</Link>
              </p>
            </ul>
          </Col>

          <Col xs={12} md={4}>
            <ul>
              <p>
                <Link to="#">Tours</Link>
              </p>
              <p>
                <Link to="#">Cities</Link>
              </p>
              <p>
                <Link to="#">Our destinations</Link>
              </p>
            </ul>
          </Col>
        </Row>

        <p className="copy-right">
          Copyright &copy; vacationTaxi.com &trade; . All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
