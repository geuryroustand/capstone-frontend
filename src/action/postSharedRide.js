export const postSharedRide = (lo) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await fetch(
        `${process.env.REACT_APP_API_PROD_URL}/shared-ride`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lo),
        }
      );

      if (response.ok) {
        const data = response.json();

        dispatch({
          type: "FETCH_SHARED_RIDE",
          payload: data,
        });

        // dispatch({
        //   type: "POST_SHARED_RIDE",
        //   payload: lo,
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
