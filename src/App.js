import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

const App = () => {
  return (
    <Layout>
      <Home />
      <SignUp />
      <LogIn />
      <Quiz />
      <Result />
    </Layout>
  );
};

export default App;
