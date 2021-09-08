import React from "react";
import TextInputs from "../Components/Inputs/TextInputs";
import classes from "../Styles/LogIn.module.css";
import Illustration from "./../Components/LogInSignIn/Illustration";
import Form from "../Components/LogInSignIn/Form";
import Button from "../Components/Inputs/Button";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <Form className={`${classes.login}`}>
          <>
            <TextInputs
              type={"email"}
              placeholder={"Your Email"}
              icon={"alternate_email"}
            ></TextInputs>
            <TextInputs
              type={"password"}
              placeholder={"Your Password"}
              icon={"lock"}
            ></TextInputs>

            <Button>
              <span>Submit Now!</span>
            </Button>

            <div className="info">
              Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
          </>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
