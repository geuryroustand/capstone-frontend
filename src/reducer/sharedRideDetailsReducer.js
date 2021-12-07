import { initialState } from "../store";

export const sharedRideDetailsReducer = (
  state = initialState.sharedRideDetails,
  action
) => {
  switch (action.type) {
    case "SHARED_RIDE_DETAILS":
      return {
        ...state,
        sharedRideDetails: action.payload,
      };

    default:
      return state;
  }
};
