import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
