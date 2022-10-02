import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Account from "./Pages/Account";
import ChatPage from "./Pages/ChatPage";
import LandingPage from "./Pages/LandingPage";
import RewardsPage from "./Pages/RewardsPage";
import TeamPage from "./Pages/TeamPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/account" exact component={Account} />
      <Route path="/team" exact component={TeamPage} />
      <Route path="/reward" exact component={RewardsPage} />
      <Route path="/chat" exact component={ChatPage} />
    </Switch>
  );
}

export default App;
