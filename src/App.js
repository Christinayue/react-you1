import React from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import ResumePage from "./pages/public/ResumePage";
import HomePage from "./pages/public/HomePage";
//import ServicePage from "./pages/public/ServicePage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/react-you1/" component={HomePage} />
      <Route exact path="/react-page2/" component={ResumePage} />


    </Switch>
  </Router>
);

export default App;
