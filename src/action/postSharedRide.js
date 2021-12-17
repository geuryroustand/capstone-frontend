export const postSharedRide = (lo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "POST_SHARED_RIDE",
        payload: lo,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postInDBSharedRide = (lo) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");

      await fetch(`${process.env.REACT_APP_API_DEV_URL}/shared-ride`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lo),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
