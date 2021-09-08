import React from "react";
import Answers from "../Quiz/Answers";
import classes from "../../Styles/Analysis.module.css";

const Analysis = () => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>

      <div className={classes.question}>
        <div className={classes.qtitle}>
          <span class="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers />
      </div>
    </div>
  );
};

export default Analysis;
