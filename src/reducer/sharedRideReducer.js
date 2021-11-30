import { initialState } from "../store";

const sharedRideReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHARED_RIDE":
      return {
        ...state.searchSharedRide,
        searchSharedRide: action.payload,
      };

    default:
      return state;
  }
};

export default sharedRideReducer;
