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

export const register = (userInfo) => {
  return async (dispatch) => {
    try {
      progress.start();
      const response = await fetch(
        `${process.env.REACT_APP_API_PROD_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }
      );

      if (response.ok) {
        setTimeout(() => {
          progress.finish();
        }, 100);
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);

        dispatch({
          type: "USER_INFO",
          payload: { name: userInfo.name, surname: userInfo.surname },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
