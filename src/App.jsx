import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
  <Route path="/home" exact component={HomePage} />
  );
}

export default App;
