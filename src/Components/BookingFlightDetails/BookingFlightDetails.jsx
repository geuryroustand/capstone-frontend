import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { format, parseISO } from "date-fns";
import "./BookingFlightDetails.css";

export const BookingFlightDetails = () => {
  const state = useSelector((state) => state);

  const [prices] = state.formSearchTransfer.prices;
  const taxiSelected = state.formSearchTransfer.taxiSelected;

  const dropPlace = prices?.dropPlace;
  const pickupPlace = prices?.pickupPlace;

  let query = new URLSearchParams(useLocation().search);
  let passengers = query.get("passengers");
  let arrivalDate = query.get("arrivalDate");
  let departureDate = query.get("departureDate");
  let journey = query.get("journey");
  let step2 = query.get("step2");

  console.log(step2);

  return (
    <div className="main-flight-details">
      <h3 className="mb-5">Your booking details</h3>
      <hr />
      <p>From Location</p>
      <h3>{pickupPlace?.location}</h3>

      <p>To Location</p>
      <h3>{dropPlace?.location}</h3>
      <p>Passengers</p>

      <h3>{passengers === "" ? 1 : passengers}</h3>
      <h3>{taxiSelected.passengers === "" ? 1 : passengers}</h3>

      <hr />

      <p>Arrival Date</p>
      <h3>
        {step2
          ? format(parseISO(taxiSelected.arrivalDate), "PPPP")
          : format(parseISO(arrivalDate), "PPPP")}
      </h3>
      {step2 ? (
        <h3> At {format(parseISO(taxiSelected.arrivalDate), "p")}</h3>
      ) : (
        <h3> At {format(parseISO(arrivalDate), "p")}</h3>
      )}

      {departureDate || taxiSelected.departureDate ? (
        <>
          <hr />
          <p>Departure Date</p>
          {step2 ? (
            <h3>{format(parseISO(taxiSelected.departureDate), "PPPP-p")}</h3>
          ) : (
            <h3>{format(parseISO(departureDate), "PPPP-p")}</h3>
          )}

          {step2 ? (
            <h3>At {format(parseISO(taxiSelected.departureDate), "p")}</h3>
          ) : (
            <h3>At {format(parseISO(departureDate), "p")}</h3>
          )}
        </>
      ) : (
        ""
      )}

      {taxiSelected.taxiOption && (
        <>
          <p>Total Price</p>
          {taxiSelected.taxiOption === "taxiOneOption" &&
            taxiSelected.journey === "OneWay" && (
              <h3>$ {prices?.oneWayPriceTex1}</h3>
            )}

          {taxiSelected.taxiOption === "taxiTwoOption" &&
            taxiSelected.journey === "OneWay" && (
              <h3>$ {prices?.oneWayPriceTex2}</h3>
            )}

          {/* RoundTrip */}

          {taxiSelected.taxiOption === "taxiOneOption" &&
            taxiSelected.journey === "roundTrip" && (
              <h3>$ {prices?.roundTripPriceTaxi1}</h3>
            )}

          {taxiSelected.taxiOption === "taxiTwoOption" &&
            taxiSelected.journey === "roundTrip" && (
              <h3>$ {prices?.roundTripPriceTaxi2}</h3>
            )}
        </>
      )}

      {/* {taxiSelected.taxiOption === "taxiTwoOption" &&
        taxiSelected.journey === "OneWay" && (
          <h3>$ {prices?.oneWayPriceTex1}</h3>
        )} */}

      {/* {journey === "roundTrip" && <h3>$ {prices?.roundTripPriceTaxi1}</h3>}

      {taxiSelected.taxiOption === "taxiOneOption" && (
        <h3>$ {prices?.oneWayPriceTex1}</h3>
      )} */}
    </div>
  );
};
