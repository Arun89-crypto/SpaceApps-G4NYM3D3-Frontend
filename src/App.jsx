import React from "react";
import { Route } from "react-router-dom";
import Account from "./Pages/Account";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Route>
      <Route path="/home" exact component={HomePage} />
      <Route path="/account" exact component={Account} />
    </Route>
  );
}

export default App;
