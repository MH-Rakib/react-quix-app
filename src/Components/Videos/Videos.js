import React from "react";
import classes from "../../Styles/Videos.module.css";
import Video from "./Video/Video";

const Videos = () => {
  return (
    <div>
      <div className={classes.videos}>
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
      </div>
    </div>
  );
};

export default Videos;
