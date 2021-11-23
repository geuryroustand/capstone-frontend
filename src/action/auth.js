export const register = (userInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "USER_INFO",
        payload: { name: userInfo.name, surname: userInfo.surname },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (userInfo) => {
  return async (dispatch) => {
    try {
      // progress.start();

      dispatch({
        type: "USER_INFO",
        payload: { name: userInfo.name, surname: userInfo.surname },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const verifyUser = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        const response = await fetch(
          `${process.env.REACT_APP_API_PROD_URL}/users/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("accessToken", data.accessToken);

          dispatch({
            type: "USER_INFO",
            payload: { name: data.name, surname: data.surname },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};
