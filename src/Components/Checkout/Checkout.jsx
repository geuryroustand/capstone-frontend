import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BookingFlightDetails } from "../BookingFlightDetails/BookingFlightDetails";
import { BookingSteps } from "../BookingSteps/BookingSteps";
import { useStripe } from "@stripe/react-stripe-js";
import stripePayments from "../../images/stripe.png";
import "./Checkout.css";
import { useSelector } from "react-redux";

export const Checkout = () => {
  const state = useSelector((state) => state);
  const stripe = useStripe();
  const { taxiSelected } = state?.formSearchTransfer;

  const handlerPayment = async (dataTo) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_PROD_URL}/create-checkout-session`,
      {
        method: "POST",
        body: JSON.stringify(dataTo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await res.json();
  };

  const handleCheckOutPayment = async (e) => {
    e.preventDefault();

    const line_items = [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: `${taxiSelected.price}` * 100,
          product_data: {
            name: `Private Airport Transfers`,
            description: `Transfer from ${taxiSelected.pickUpLocation} To ${taxiSelected.dropLocation}`,
          },
        },
      },
    ];

    const response = await handlerPayment({
      line_items,
      customer_email: taxiSelected.email,
      taxiSelected,
    });

    const { sessionId } = await response;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <BookingSteps />
        <Col xs={12} md={5}>
          <BookingFlightDetails transferSelected={taxiSelected} />
        </Col>
        <Col xs={12} className="mt-3" md={7}>
          <h2>How would you like to pay?</h2>
          <p>You can pay with debit or credit card.</p>
          <p>
            We going to be redirect to stripe , once the payment its done you
            going to be redirect to our website again.{" "}
          </p>

          <img style={{ width: "90%" }} src={stripePayments} alt="" />

          <Form onSubmit={handleCheckOutPayment}>
            <Button className="btn-check-out" type="submit">
              Continue
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
