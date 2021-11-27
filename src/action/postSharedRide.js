export const postSharedRide = (lo) => {
  return async (dispatch) => {
    dispatch({
      type: "POST_SHARED_RIDE",
      payload: lo,
    });
  };
};
