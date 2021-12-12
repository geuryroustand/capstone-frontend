export const register = (userInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "USER_INFO",
        payload: {
          name: userInfo.name,
          surname: userInfo.surname,
          avatar: userInfo.avatar,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (userInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "USER_INFO",
        payload: {
          name: userInfo.name,
          surname: userInfo.surname,
          avatar: userInfo.avatar,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const userUpdated = (userInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "USER_EDITED",
        payload: {
          name: userInfo.name,
          surname: userInfo.surname,
          avatar: userInfo.avatar,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const verifyUser = (accessTokenSocial) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken || accessTokenSocial) {
        const response = await fetch(
          `${process.env.REACT_APP_API_PROD_URL}/users/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${
                accessToken ? accessToken : accessTokenSocial
              }`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("accessToken", data.accessToken);
          dispatch({
            type: "USER_INFO",
            payload: {
              name: data.name,
              surname: data.surname,
              avatar: data.avatar,
              email: data.email,
              _id: data._id,
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};
