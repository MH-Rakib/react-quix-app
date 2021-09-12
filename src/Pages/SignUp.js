import React from "react";
import Illustration from "../Components/LogInSignIn/Illustration";
import SignupForm from "./../Components/LogInSignIn/SignupForm";

const SignUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;
