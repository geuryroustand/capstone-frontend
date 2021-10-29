import React from "react";
import { Container } from "react-bootstrap";
import "./BookingSteps.css";

export const BookingSteps = () => {
  return (
    <Container>
      <div className="d-flex mb-3 main-steps-section">
        <div className="first-step-section d-flex mb-4">
          <div className="first-step">
            <p>1</p>
          </div>
          <p className="border-line"></p>
        </div>
        {/* <p>Choose your taxi</p> */}

        <div className="second-step-section d-flex mb-4">
          <div className="second-step">
            <p>2</p>
          </div>
          <p className="border-line-second-step"></p>
        </div>

        <div className="third-step-section d-flex mb-4">
          <div className="third-step">
            <p>3</p>
          </div>
          <p className="border-line-third-step"></p>
        </div>
      </div>
    </Container>
  );
};
