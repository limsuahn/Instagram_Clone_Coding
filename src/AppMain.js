import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./pages/Post";
import Mypage from "./pages/Mypage";

const AppMain = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Mypage />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppMain;
