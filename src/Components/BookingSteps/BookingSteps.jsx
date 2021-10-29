import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./BookingSteps.css";

export const BookingSteps = () => {
  const { step2 } = useParams();

  // console.log(step2);
  return (
    <Container>
      <div className="d-flex mb-3 main-steps-section">
        <div className="first-step-section d-flex mb-4">
          <div style={step2 && { opacity: "0.4" }} className="first-step">
            <p>1</p>
          </div>
          <p
            style={step2 && { borderBottom: "solid 2px#726c6c" }}
            className="border-line"
          ></p>
          {/* <p>Choose your taxi</p> */}
        </div>

        <div className="second-step-section d-flex mb-4">
          <div style={step2 && { opacity: "10" }} className="second-step">
            <p>2</p>
          </div>
          <p
            style={step2 && { borderBottom: "solid 2px#F0A500" }}
            className="border-line-second-step"
          ></p>
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
