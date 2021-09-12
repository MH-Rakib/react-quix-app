import React from "react";
import TextInputs from "../Components/Inputs/TextInputs";
import classes from "../Styles/LogIn.module.css";
import Illustration from "./../Components/LogInSignIn/Illustration";
import Form from "../Components/LogInSignIn/Form";
import Button from "../Components/Inputs/Button";
import { Link } from "react-router-dom";
import LoginForm from "./../Components/LogInSignIn/LoginForm";

const LogIn = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default LogIn;
