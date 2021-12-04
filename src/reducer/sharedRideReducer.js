import { initialState } from "../store";

const sharedRideReducer = (state = initialState.searchSharedRide, action) => {
  switch (action.type) {
    case "FETCH_SHARED_RIDE":
      return {
        ...state,
        sharedRide: action.payload,
      };

    default:
      return state;
  }
};

export default sharedRideReducer;
