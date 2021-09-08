import React from "react";
import Illustration from "../Components/LogInSignIn/Illustration";
import Form from "../Components/LogInSignIn/Form";
import classes from "../Styles/SignUp.module.css";
import TextInputs from "./../Components/Inputs/TextInputs";
import Checkbox from "./../Components/Inputs/Checkbox";
import Button from "./../Components/Inputs/Button";

const SignUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <Form className={`${classes.signup}`}>
          <>
            <TextInputs
              type={"text"}
              placeholder={"Your Name"}
              icon={"person"}
            ></TextInputs>
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
            <TextInputs
              type={"password"}
              placeholder={"Retype Password"}
              icon={"lock_clock"}
            ></TextInputs>
            <Checkbox
              type={"checkbox"}
              text={"I agree to the Terms & Conditions"}
            />
            <Button>
              <span>Submit Now!</span>
            </Button>

            <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
          </>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
