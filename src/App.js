import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/signup"}>
            <SignUp />
          </Route>
          <Route path={"/login"}>
            <LogIn />
          </Route>
          <Route path={"/quiz"}>
            <Quiz />
          </Route>
          <Route path={"/result"}>
            <Result />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
