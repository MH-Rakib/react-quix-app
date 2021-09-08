import React from "react";
import classes from "../../Styles/Answers.module.css";
import Checkbox from "./../Inputs/Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        type={"checkbox"}
        text={"Test Answer"}
      />
      <Checkbox
        className={classes.answer}
        type={"checkbox"}
        text={"Test Answer"}
      />
      <Checkbox
        className={classes.answer}
        type={"checkbox"}
        text={"Test Answer"}
      />
    </div>
  );
};

export default Answers;
