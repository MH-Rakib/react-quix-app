import React from "react";
import classes from "../../Styles/Illustration.module.css";
import signUpImg from "../../Assets/images/signup.svg";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signUpImg} alt="Signup" />
    </div>
  );
};

export default Illustration;
