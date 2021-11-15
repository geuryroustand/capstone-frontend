import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
import "./BookingSteps.css";

export const BookingSteps = () => {
  let query = new URLSearchParams(useLocation().search);

  let step2 = query.get("step2");
  let step3 = query.get("step3");

  console.log("ddd", step2);
  // console.log(step2);
  // let step2 = "step2";

  return (
    <Container>
      <div className="d-flex mb-3 main-steps-section">
        <div className="first-step-section d-flex mb-4">
          {/* style={step2 && { opacity: "0.4" }} */}
          <div className="first-step">
            <p>1</p>
          </div>

          <p
            // style={step2 && { borderBottom: "solid 3px#726c6c" }}
            className="border-line"
          ></p>

          {/* <p>Choose your taxi</p> */}
        </div>

        <div className="second-step-section d-flex mb-4">
          <div style={step2 && { opacity: "10" }} className="second-step">
            <p>2</p>
          </div>
          <p
            style={step2 && { borderBottom: "solid 3px#F0A500" }}
            className="border-line-second-step"
          ></p>
        </div>

        <div className="third-step-section d-flex mb-4">
          <div style={step3 && { opacity: "10" }} className="third-step">
            <p>3</p>
          </div>
          <p className="border-line-third-step"></p>
        </div>
      </div>
    </Container>
  );
};
