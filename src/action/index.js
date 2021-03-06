import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 7,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#F0A500",

  // Class name used for the progress bar element.
  className: "bar-of-progress",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 80,
});

export const fetchLocations = () => {
  return async (dispatch, getState) => {
    try {
      // process.env.REACT_APP_API_DEV_URL || REACT_APP_API_PROD_URL

      let response = await fetch(
        `${
          process.env.REACT_APP_API_PROD_URL ||
          process.env.REACT_APP_API_DEV_URL
        }/locations`,

        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ payload: searchString }),
        }
      );

      if (response.ok) {
        let locations = await response.json();
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

export const fetchPrices = (queryPickupPlace, queryDropPlace) => {
  return async (dispatch, getState) => {
    try {
      progress.start();

      let response = await fetch(
        `${
          process.env.REACT_APP_API_PROD_URL ||
          process.env.REACT_APP_API_DEV_URL
        }/locations/addPrices?pickupPlace=${queryPickupPlace}&dropPlace=${queryDropPlace}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ payload: searchString }),
        }
      );

      if (response.ok) {
        setTimeout(() => {
          progress.finish();
        }, 1000);
        let prices = await response.json();

        console.log("from prices ", prices);
        dispatch({
          type: "FETCH_PRICES",
          payload: prices,
        });

        // dispatch({
        //   type: "LOCATION_NOT_FOUND",
        //   payload: false,
        // });
        // if (locations.length === 0) {
        //   dispatch({
        //     type: "LOCATION_NOT_FOUND",
        //     payload: true,
        //   });
        // }
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const selectedPickLocation = (pickup) => {
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

export const taxiOptionSelected = (taxiSelected) => {
  return async (dispatch) => {
    dispatch({
      type: "TAXI_SELECTED",
      payload: taxiSelected,
    });
  };
};

export const selectedSharedRidePickLocation = (pickup) => {
  return async (dispatch) => {
    dispatch({
      type: "SELECTED_SHARED_RIDE_PICK_UP_LOCATION",
      payload: pickup,
    });
  };
};

export const selectedSharedRideDropLocation = (drop) => {
  return async (dispatch) => {
    dispatch({
      type: "SELECTED_SHARED_RIDE_DROP_LOCATION",
      payload: drop,
    });
  };
};

// SHARED RIDE

export const fetchSharedRide = (pickLocation, dropLocation, serviceDate) => {
  return async (dispatch) => {
    // &serviceDate=${serviceDate}
    try {
      progress.start();
      const response = await fetch(
        `
        ${
          process.env.REACT_APP_API_PROD_URL ||
          process.env.REACT_APP_API_DEV_URL
        }/shared-ride?pickLocation=${pickLocation}&dropLocation=${dropLocation}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        let sharedRides = await response.json();

        dispatch({
          type: "FETCH_SHARED_RIDE",
          payload: sharedRides,
        });

        setTimeout(() => {
          progress.finish();
        }, 500);
      }
    } catch (error) {
      console.log("error");
    }
  };
};
