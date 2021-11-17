import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register/Register";
import { BookingDetails } from "./pages/BookingDetails/BookingDetails";
import { PassengerDetails } from "./pages/PassengerDetails/PassengerDetails";
import { Checkout } from "./Components/Checkout/Checkout";
import SharedRide from "./Components/SharedRide/SharedRide";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/register" exact>
          <Register />
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
        <Route path="/sharedRide" exact>
          <SharedRide />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
