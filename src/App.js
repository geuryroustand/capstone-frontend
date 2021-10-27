import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register/Register";
import { BookingDetails } from "./pages/BookingDetails/BookingDetails";

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
        <Route path="/bookingDetails">
          <BookingDetails />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
