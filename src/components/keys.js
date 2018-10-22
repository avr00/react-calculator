import React from "react";

const Keys = props => {
  return (
    <div className="keys">
      <button onClick={props.deleteInput} id="clear">
        C
      </button>
      <button onClick={props.displayInput} value="/" id="divide">
        &divide;
      </button>
      <button onClick={props.displayInput} value="*" id="multiply">
        &times;
      </button>
      <button onClick={props.deleteLast} id="del">
        Del
      </button>
      <button onClick={props.displayInput} value="-" id="subtract">
        -
      </button>
      <button onClick={props.displayInput} value="+" id="add">
        +
      </button>
      <button onClick={props.calculateInput} className="equal">
        =
      </button>
      <button onClick={props.displayInput} value="7" id="seven">
        7
      </button>
      <button onClick={props.displayInput} value="8" id="eight">
        8
      </button>
      <button onClick={props.displayInput} value="9" id="nine">
        9
      </button>
      <button onClick={props.displayInput} value="4" id="four">
        4
      </button>
      <button onClick={props.displayInput} value="5" id="five">
        5
      </button>
      <button onClick={props.displayInput} value="6" id="six">
        6
      </button>
      <button onClick={props.displayInput} value="1" id="one">
        1
      </button>
      <button onClick={props.displayInput} value="2" id="two">
        2
      </button>
      <button onClick={props.displayInput} value="3" id="three">
        3
      </button>
      <button onClick={props.displayInput} value="0" id="zero">
        0
      </button>
      <button onClick={props.displayInput} value="." id="decimal">
        .
      </button>
    </div>
  );
};

export default Keys;
