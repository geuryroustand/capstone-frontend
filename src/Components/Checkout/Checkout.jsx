import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BookingFlightDetails } from "../BookingFlightDetails/BookingFlightDetails";
import { BookingSteps } from "../BookingSteps/BookingSteps";
import { useStripe } from "@stripe/react-stripe-js";

import "./Checkout.css";
import { useSelector } from "react-redux";

export const Checkout = () => {
  const state = useSelector((state) => state);
  const stripe = useStripe();
  const { taxiSelected } = state?.formSearchTransfer;

  console.log(taxiSelected.email);
  const {
    name,
    surname,
    email,
    phoneNumber,
    arrivalAirlineName,
    arrivalFlightNumber,
    arrivalDepartureAirport,
    departureAirlineName,
    departureFlightNumber,
    departureDepartureAirport,
    arrivalDate,
    departureDate,
    journey,
    passengers,
    taxiOption,
  } = taxiSelected;

  const handlerPayment = async (dataTo) => {
    const res = await fetch(
      `http://localhost:3001/bookings/create-checkout-session`,
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
      ...taxiSelected,

      // name,
      // surname,
      // phoneNumber,
      // arrivalAirlineName,
      // arrivalFlightNumber,
      // arrivalDepartureAirport,
      // departureAirlineName,
      // departureFlightNumber,
      // departureDepartureAirport,
      // arrivalDate,
      // departureDate,
      // journey,
      // passengers,
      // taxiOption,
    });

    console.log(response);

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
          <BookingFlightDetails />
        </Col>
        <Col xs={12} md={7}>
          <Form onSubmit={handleCheckOutPayment}>
            <Button type="submit">Continue</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
