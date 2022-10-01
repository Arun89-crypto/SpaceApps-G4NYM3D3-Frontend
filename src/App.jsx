import React from "react";
import { Route } from "react-router-dom";
import Account from "./Pages/Account";
import ChatPage from "./Pages/ChatPage";
import LandingPage from "./Pages/LandingPage";
import RewardsPage from "./Pages/RewardsPage";
import TeamPage from "./Pages/TeamPage";

function App() {
  return (
    <Route>
      <Route path="/" exact component={LandingPage} />
      <Route path="/account" exact component={Account} />
      <Route path="/team" exact component={TeamPage} />
      <Route path="/reward" exact component={RewardsPage} />
      <Route path="/chat" exact component={ChatPage} />
    </Route>
  );
}

export default App;
