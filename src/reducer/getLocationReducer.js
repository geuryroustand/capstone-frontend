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

    default:
      return state;
  }
}
