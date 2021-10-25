export const fetchLocations = (searchString) => {
  return async (dispatch, getState) => {
    try {
      // ?location=${searchString}
      let response = await fetch(`http://localhost:3001/locations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: searchString }),
      });

      if (response.ok) {
        let locations = await response.json();
        dispatch({
          type: "FETCH_LOCATIONS_PICKUP",
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

export const selectPickedLocation = (pickup) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_PICK_UP",
      payload: pickup,
    });
  };
};

export const fetchDropLocations = (searchString) => {
  return async (dispatch, getState) => {
    try {
      // ?location=${searchString}
      let response = await fetch(`http://localhost:3001/locations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: searchString }),
      });

      if (response.ok) {
        let locations = await response.json();
        dispatch({
          type: "FETCH_LOCATIONS_DROP",
          payload: locations,
        });
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

export const selectDropDestination = (dropDestination) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_DROP_DESTINATION",
      payload: dropDestination,
    });
  };
};
