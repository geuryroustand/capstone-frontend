import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import { format } from "date-fns";
import "./BookingFlightDetails.css";

export const BookingFlightDetails = ({ transferSelected }) => {
  const state = useSelector((state) => state);

  const [prices] = state.formSearchTransfer.prices;
  const taxiSelected = state.formSearchTransfer.taxiSelected;

  const dropPlace = prices?.dropPlace;
  const pickupPlace = prices?.pickupPlace;

  let query = new URLSearchParams(useLocation().search);
  let passengers = query.get("passengers");
  let arrivalDate = query.get("arrivalDate");
  let departureDate = query.get("departureDate");
  let step2 = query.get("step2");
  let step3 = query.get("step3");

  // console.log(
  //   "sss",
  //   taxiSelected.taxiOption === "taxiOneOption" &&
  //     taxiSelected.journey === "OneWay"
  //     ? prices?.oneWayPriceTex1
  //     : ""
  // );

  // dispatch(
  //   taxiPriceSelected({
  //     price:
  //       taxiSelected.taxiOption === "taxiOneOption" &&
  //       taxiSelected.journey === "OneWay"
  //         ? prices?.oneWayPriceTex1
  //         : "",
  //   })
  // );

  return (
    <div className="main-flight-details">
      <h3 className="mb-5">Your booking details</h3>
      <hr />
      <p>From Location</p>
      <h3>{pickupPlace?.location}</h3>

      <p>To Location</p>
      <h3>{dropPlace?.location}</h3>
      <hr />

      <p>Arrival Date</p>
      <h3>
        {step2
          ? format(
              new Date(
                taxiSelected?.arrivalDate
                  ? taxiSelected?.arrivalDate
                  : taxiSelected?.arrivalDate
              ),

              "EEEE d, MMM  yyyy"
            )
          : format(
              new Date(arrivalDate ? arrivalDate : taxiSelected?.arrivalDate),
              " EEEE d, MMM  yyyy"
            )}
      </h3>

      {step2 ? (
        <h3>
          At{" "}
          {format(
            new Date(
              taxiSelected?.arrivalDate
                ? taxiSelected?.arrivalDate
                : taxiSelected?.arrivalDate
            ),
            "k : mm"
          )}
        </h3>
      ) : (
        <h3>
          {" "}
          At{" "}
          {format(
            new Date(arrivalDate ? arrivalDate : taxiSelected?.arrivalDate),
            "k : mm"
          )}
        </h3>
      )}

      {departureDate ||
      taxiSelected?.departureDate ||
      taxiSelected?.departureDate ? (
        <>
          <hr />
          <p>Departure Date</p>
          {step2 ? (
            <h3>
              {format(
                new Date(
                  taxiSelected?.departureDate
                    ? taxiSelected?.departureDate
                    : taxiSelected?.departureDate
                ),
                "EEEE d, MMM  yyyy"
              )}
            </h3>
          ) : (
            <h3>
              {format(
                new Date(
                  departureDate ? departureDate : taxiSelected?.departureDate
                ),
                "EEEE d, MMM  yyyy"
              )}
            </h3>
          )}

          {step2 ? (
            <h3>
              At{" "}
              {format(
                new Date(
                  taxiSelected?.departureDate
                    ? taxiSelected?.departureDate
                    : taxiSelected?.departureDate
                ),
                "k : mm"
              )}
            </h3>
          ) : (
            <h3>
              At{" "}
              {format(
                new Date(
                  departureDate ? departureDate : taxiSelected?.departureDate
                ),
                "k : mm"
              )}
            </h3>
          )}
        </>
      ) : (
        ""
      )}
      <hr />
      <p>Passengers</p>
      <h3>{passengers === "" ? 1 : passengers}</h3>

      {step2 || step3 ? (
        <h3>{taxiSelected.passengers === "" ? 1 : taxiSelected.passengers}</h3>
      ) : (
        ""
      )}

      {taxiSelected.taxiOption ? (
        <>
          <p>Total Price</p>
          {taxiSelected.taxiOption === "taxiOneOption" &&
            taxiSelected.journey === "OneWay" && (
              <h3>$ {transferSelected?.price || prices?.oneWayPriceTex1}</h3>
            )}

          {taxiSelected.taxiOption === "taxiTwoOption" &&
            taxiSelected.journey === "OneWay" && (
              <h3>$ {transferSelected?.price || prices?.oneWayPriceTex2}</h3>
            )}

          {/* {taxiSelected.taxiSelectedInfo?.taxiOption === "taxiOneOption" &&
            taxiSelected.taxiSelectedInfo?.journey === "OneWay" && (
              <h3>$ {prices?.oneWayPriceTex1}</h3>
            )} */}

          {/* RoundTrip */}

          {taxiSelected.taxiOption === "taxiOneOption" &&
            taxiSelected.journey === "roundTrip" && (
              <h3>
                $ {transferSelected?.price || prices?.roundTripPriceTaxi1}
              </h3>
            )}

          {taxiSelected.taxiOption === "taxiTwoOption" &&
            taxiSelected.journey === "roundTrip" && (
              <h3>
                $ {transferSelected?.price || prices?.roundTripPriceTaxi2}
              </h3>
            )}
        </>
      ) : (
        <>
          {taxiSelected.taxiSelectedInfo?.taxiOption && <p>Total Price</p>}
          {taxiSelected.taxiSelectedInfo?.taxiOption === "taxiOneOption" &&
            taxiSelected.taxiSelectedInfo?.journey === "OneWay" && (
              <>
                <h3>$ {transferSelected?.price || prices?.oneWayPriceTex1}</h3>
              </>
            )}

          {taxiSelected?.taxiSelectedInfo?.taxiOption === "taxiTwoOption" &&
            taxiSelected?.taxiSelectedInfo?.journey === "OneWay" && (
              <h3>$ {transferSelected?.price || prices?.oneWayPriceTex2}</h3>
            )}

          {/* RoundTrip */}

          {taxiSelected?.taxiSelectedInfo?.taxiOption === "taxiOneOption" &&
            taxiSelected?.taxiSelectedInfo?.journey === "roundTrip" && (
              <h3>
                $ {transferSelected?.price || prices?.roundTripPriceTaxi1}
              </h3>
            )}

          {taxiSelected?.taxiSelectedInfo?.taxiOption === "taxiTwoOption" &&
            taxiSelected?.taxiSelectedInfo?.journey === "roundTrip" && (
              <h3>
                $ {transferSelected?.price || prices?.roundTripPriceTaxi2}
              </h3>
            )}
        </>
      )}
      {step3 && (
        <>
          <hr />
          <p>Passenger name</p>
          <h3>
            {taxiSelected.name} {taxiSelected.surname}
          </h3>
          <p>Passenger mobile</p>
          <h3>{taxiSelected.phoneNumber}</h3>
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
