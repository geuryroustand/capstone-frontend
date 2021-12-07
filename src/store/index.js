import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducer/authReducer";
import getLocationReducer from "../reducer/getLocationReducer";
import postSharedRideReducer from "../reducer/postSharedRideReducer";
import { sharedRideDetailsReducer } from "../reducer/sharedRideDetailsReducer";
import sharedRideReducer from "../reducer/sharedRideReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  formSearchTransfer: {
    locations: [],
    taxiOption: "",
    prices: [],
    pickUpLocation: [],
    dropLocation: [],

    taxiSelected: {
      passengers: "1",
    },
    locationNotFound: true,
    pickUpSharedRideLocation: [],
    dropSharedRideLocation: [],
  },

  sharedRideDetails: [],

  searchSharedRide: {
    sharedRide: [],
  },
  auth: {
    login: false,
  },
  postSharedRide: [],
};

const bigReducer = combineReducers({
  formSearchTransfer: getLocationReducer,
  searchSharedRide: sharedRideReducer,
  auth: authReducer,
  postSharedRide: postSharedRideReducer,
  sharedRideDetails: sharedRideDetailsReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,

  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
