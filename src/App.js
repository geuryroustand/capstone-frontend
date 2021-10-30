import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register/Register";
import { BookingDetails } from "./pages/BookingDetails/BookingDetails";
import { PassengerDetails } from "./pages/PassengerDetails/PassengerDetails";

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
      </Switch>
    </Layout>
  );
}

export default App;
