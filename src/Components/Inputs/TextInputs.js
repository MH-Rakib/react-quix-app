import React from "react";
import classes from "../../Styles/TextInput.module.css";

const TextInputs = ({ type, placeholder, icon }) => {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInputs;
