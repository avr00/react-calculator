import React from "react";

const Display = props => {
  return (
    <div
      className={props.displayResult ? "display onlyresult" : "display"}
      id="display"
    >
      <div className="calculation">{props.input}</div>
      <div className="result">{props.result}</div>
    </div>
  );
};

export default Display;
