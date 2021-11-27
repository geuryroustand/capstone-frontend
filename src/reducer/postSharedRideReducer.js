import React from "react";
import { initialState } from "../store";

export default function postSharedRideReducer(
  state = initialState.postSharedRide,
  action
) {
  switch (action.type) {
    case "POST_SHARED_RIDE":
      const loc = action.payload.filter((lo) => lo.location);
      return {
        // ...loc,
        ...action.payload,
      };

    default:
      return state;
  }
}
