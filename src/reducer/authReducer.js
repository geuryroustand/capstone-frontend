import { initialState } from "../store";

export function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case "USER_INFO":
      console.log("action", action);
      return {
        ...state,
        auth: action.payload,
      };

    default:
      return state;
  }
}
