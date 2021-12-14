import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register/Register";
import { BookingDetails } from "./pages/BookingDetails/BookingDetails";
import { PassengerDetails } from "./pages/PassengerDetails/PassengerDetails";
import { Checkout } from "./Components/Checkout/Checkout";
import SharedRide from "./Components/SharedRide/SharedRide";
import FindSharedRide from "./pages/FindSharedRide/FindSharedRide";
import SignIn from "./pages/SignIn/SignIn";
import { useEffect } from "react";
import { verifyUser } from "./action/auth";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetails from "./Components/Profile/ProfileDetails";
import PostSharedRide from "./pages/PostSharedRide/PostSharedRide";
import { PostForm } from "./pages/PostSharedRide/PostForm";
import PostSharedRideDetails from "./pages/PostSharedRideDetails/PostSharedRideDetails";

function App() {
  const query = new URLSearchParams(useLocation().search);

  const state = useSelector((state) => state.state);

  const accessToken = query.get("accessToken");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyUser(accessToken));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/sharedRide">
          <SharedRide />
        </Route>
        <Route path="/postSharedRide" exact>
          <PostSharedRide />
        </Route>
        <Route path="/postSharedRideDetails" exact>
          <PostSharedRideDetails />
        </Route>
        <Route path="/postRide" exact>
          <PostForm />
        </Route>
        <Route path="/me" exact>
          <ProfileDetails />
        </Route>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
        <Route path="/bookingDetails" exact>
          <BookingDetails />
        </Route>
        <Route path="/passengerDetails" exact>
          <PassengerDetails />
        </Route>
        <Route path="/paymentDetails" exact>
          <Checkout />
        </Route>

        <Route path="/searchSharedRide" exact>
          <FindSharedRide />
        </Route>
        {/* <Route path="*">
          <Redirect to="/" />
        </Route> */}
      </Switch>
    </Layout>
  );
}

export default App;
