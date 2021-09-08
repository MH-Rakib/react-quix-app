import React from "react";
import classes from "../../Styles/Button.module.css";

const Button = ({ children, className }) => {
  return <div className={`${className} ${classes.button}`}>{children}</div>;
};

export default Button;
