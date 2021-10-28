import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { format } from "date-fns";
import "./BookingFlightDetails.css";

export const BookingFlightDetails = () => {
  const state = useSelector((state) => state);

  const [prices] = state.formSearchTransfer.prices;

  const dropPlace = prices?.dropPlace;
  const pickupPlace = prices?.pickupPlace;

  let query = new URLSearchParams(useLocation().search);
  let passengers = query.get("passengers");
  let arrivalDate = query.get("arrivalDate");
  let departureDate = query.get("departureDate");
  let journey = query.get("journey");

  return (
    <div className="main-flight-details">
      <h3 className="mb-5">Your booking details</h3>
      <hr />
      <p>From Location</p>
      <h3>{pickupPlace?.location}</h3>

      <p>To Location</p>
      <h3>{dropPlace?.location}</h3>
      <p>Passengers</p>
      <h3>{passengers}</h3>

      <hr />

      <p>Arrival Date</p>
      <h3>{format(new Date(arrivalDate), "PPPP")}</h3>
      <h3> At {format(new Date(arrivalDate), "p")}</h3>
      {departureDate && (
        <>
          <hr />
          <p>Arrival Departure Date</p>
          <h3>{format(new Date(departureDate), "PPPP-p")}</h3>
          <h3>At {format(new Date(departureDate), "p")}</h3>
        </>
      )}

      {/* <p>Total Price</p>
      {journey === "OneWay" ? (
        <h3>$ {prices?.oneWayPriceTex1}</h3>
      ) : (
        <h3>$ {prices?.roundTripPriceTaxi1}</h3>
      )} */}
    </div>
  );
};
