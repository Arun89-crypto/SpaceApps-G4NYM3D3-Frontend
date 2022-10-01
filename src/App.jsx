import React from "react";
import { Route } from "react-router-dom";
import Account from "./Pages/Account";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Route>
      <Route path="/" exact component={LandingPage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/account" exact component={Account} />
    </Route>
  );
}

export default App;
