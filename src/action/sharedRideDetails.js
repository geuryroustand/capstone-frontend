export const sharedRideDetails = (rideDetails) => {
  return async (dispatch) => {
    dispatch({
      type: "SHARED_RIDE_DETAILS",
      payload: rideDetails,
    });
  };
};
