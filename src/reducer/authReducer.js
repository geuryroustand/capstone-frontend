import { initialState } from "../store";

export function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case "USER_INFO":
      return {
        ...state,
        login: true,
        ...action.payload,
      };

    case "USER_EDITED":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
