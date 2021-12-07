import { initialState } from "../store";

export default function postSharedRideReducer(
  state = initialState.postSharedRide,
  action
) {
  switch (action.type) {
    case "POST_SHARED_RIDE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
