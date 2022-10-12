import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import LandHOC from "./HOC/Landing.HOC";
import Account from "./Pages/Account";
import ChatPage from "./Pages/ChatPage";
import LandingPage from "./Pages/LandingPage";
import TeamPage from "./Pages/TeamPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/account/:tabName" exact component={Account} />
        {/* <Route path="/account/reward" exact component={Account} /> */}
        <Route path="/team" exact component={TeamPage} />
        <Route path="/chat/:id" exact component={ChatPage} />
      </Switch>
      {/* <LandHOC path="/" exact component={LandingPage}/> */}
    </>
  );
}

export default App;
