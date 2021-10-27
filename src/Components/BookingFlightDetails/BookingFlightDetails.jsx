import React from "react";

import "./BookingFlightDetails.css";

export const BookingFlightDetails = () => {
  return (
    <div className="main-flight-details">
      <h3 className="mb-5">Your booking details</h3>

      <p>From Location</p>
      <h3>Samaná El Catey International Airport (AZS) </h3>

      <p>To Location</p>
      <h3>Bahia Principe Grand El Portillo</h3>
      <p>Passengers</p>
      <h3>4</h3>

      <hr />

      <p>Arrival Date</p>
      <h3>Fri 29 Oct 2021 at 12:00</h3>

      <p>Arrival Departure Date</p>
      <h3>Fri 50 Oct 2022 at 12:00</h3>

      <hr />
      <p>Total Price</p>
      <h3>149</h3>
    </div>
  );
};
