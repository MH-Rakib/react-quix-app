import React from "react";

const Checkbox = ({ className, type, text }) => {
  return (
    <label className={className}>
      <input type={type} /> &nbsp;
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
