import React from "react";
import { initialState } from "../store";

export default function getLocationReducer(
  state = initialState.formSearchTransfer,
  action
) {
  switch (action.type) {
    case "FETCH_LOCATIONS_PICKUP":
      console.log(action.payload);
      return {
        ...state,

        pickUpLocation: action.payload,

        // locations: state.locations.filter(location ),
      };

    case "FETCH_LOCATIONS_DROP":
      console.log(action.payload);
      return {
        ...state,
        dropLocation: action.payload,
        // locations: state.locations.filter(location ),
      };

    case "LOCATION_NOT_FOUND":
      return {
        ...state,
        locationNotFound: action.payload,
      };

    case "SET_PICK_UP":
      return {
        ...state,
        pickUpLocation: action.payload,
        selectedPickLocation: true,
      };

    case "SET_DROP_DESTINATION":
      return {
        ...state,
        dropLocation: action.payload,
        selectedDropLocation: true,
      };
    default:
      return state;
  }
}
