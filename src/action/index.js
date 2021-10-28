export const fetchLocations = (searchString) => {
  return async (dispatch, getState) => {
    try {
      // ?location=${searchString}
      let response = await fetch(`http://localhost:3001/locations`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ payload: searchString }),
      });

      if (response.ok) {
        let locations = await response.json();

        console.log(locations);
        dispatch({
          type: "FETCH_LOCATIONS",
          payload: locations,
        });

        // dispatch({
        //   type: "FETCH_LOCATIONS_DROP",
        //   payload: locations,
        // });
        dispatch({
          type: "LOCATION_NOT_FOUND",
          payload: false,
        });
        if (locations.length === 0) {
          dispatch({
            type: "LOCATION_NOT_FOUND",
            payload: true,
          });
        }
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const selectedPickLocation = (pickup) => {
  console.log(pickup, "pickup action");
  return async (dispatch) => {
    dispatch({
      type: "SELECTED_PICK_UP_LOCATION",
      payload: pickup,
    });
  };
};

export const selectedDropLocation = (drop) => {
  console.log("drop action", drop);
  return async (dispatch) => {
    dispatch({
      type: "SELECTED_DROP_LOCATION",
      payload: drop,
    });
  };
};
