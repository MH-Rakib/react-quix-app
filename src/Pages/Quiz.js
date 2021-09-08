import React from "react";
import Answers from "./../Components/Quiz/Answers";
import ProgressBar from "./../Components/Quiz/ProgressBar";
import Miniplayer from "./../Components/Quiz/Miniplayer";

const Quiz = () => {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <Miniplayer />
    </div>
  );
};

export default Quiz;
