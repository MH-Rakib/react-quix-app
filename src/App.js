import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import { AuthProvider } from "./AuthContext/Authcontext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import PublicRoute from "./Components/Routes/PublicRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <PublicRoute path={"/signup"}>
              <SignUp />
            </PublicRoute>
            <PublicRoute path={"/login"}>
              <LogIn />
            </PublicRoute>
            <PrivateRoute path={"/quiz"}>
              <Quiz />
            </PrivateRoute>
            <PrivateRoute path={"/result"}>
              <Result />
            </PrivateRoute>
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
