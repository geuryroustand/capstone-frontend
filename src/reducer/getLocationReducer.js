import { initialState } from "../store";

export default function getLocationReducer(
  state = initialState.formSearchTransfer,
  action
) {
  switch (action.type) {
    case "FETCH_LOCATIONS":
      return {
        ...state,

        locations: action.payload,

        // locations: state.locations.filter(location ),
      };
    case "FETCH_PRICES":
      return {
        ...state,
        prices: action.payload,

        // locations: state.locations.filter(location ),
      };
    case "LOCATION_NOT_FOUND":
      return {
        ...state,
        locationNotFound: action.payload,
      };

    case "SELECTED_PICK_UP_LOCATION":
      return {
        ...state,
        pickUpLocation: action.payload,
        // selectedPickLocation: true,
      };

    case "SELECTED_DROP_LOCATION":
      return {
        ...state,
        dropLocation: action.payload,
      };

    case "TAXI_SELECTED":
      return {
        ...state,
        taxiSelected: action.payload,
      };

    case "SELECTED_SHARED_RIDE_PICK_UP_LOCATION":
      return {
        ...state,
        pickUpSharedRideLocation: action.payload,
      };

    case "SELECTED_SHARED_RIDE_DROP_LOCATION":
      return {
        ...state,
        dropSharedRideLocation: action.payload,
        // selectedPickLocation: true,
      };

    default:
      return state;
  }
}
