import React, { Component } from "react";
import "./App.scss";
import Keys from "./components/keys";
import Display from "./components/display";

// VARS
const isOperator = /[*/+-]/;
const isOpButMinus = /[*/+]/;
const endsWithOperator = /[*+-/]$/;
const beginsWithOperatorButMinus = /^[*/+]/;
const isMinus = /[-]/;


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: "",
      displayResult: false
    };

    this.displayInput = this.displayInput.bind(this);
    this.deleteLast = this.deleteLast.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.calculateInput = this.calculateInput.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  displayInput(event) {
    const input = this.state.input + event.target.value;
    const lastCharStateIsNotOperator = !isOperator.test(
      this.state.input.charAt(this.state.input.length - 1)
    );
    const notOperatorButMinus = !isOpButMinus.test(event.target.value);
    const notBeginWithOpButMinus = !beginsWithOperatorButMinus.test(
      event.target.value
    );
    const lastCharIsNotMinus = !isMinus.test(
      this.state.input.charAt(this.state.input.length - 1)
    );

    const lastInputIsNotMinus = !isMinus.test(event.target.value);

    if (lastCharStateIsNotOperator || notOperatorButMinus) {
      if (lastCharIsNotMinus || lastInputIsNotMinus) {
        if (notBeginWithOpButMinus || input.length > 1) {
          this.setState(
            {
              input: input,
              displayResult: false
            },
            () => this.displayResult()
          );
        }
      }
    }
  }

  deleteLast() {
    const input = this.state.input;
    if (input.length > 0) {
      const sliced = input.slice(0, -1);
      this.setState(
        {
          input: sliced,
          displayResult: false
        },
        () => this.displayResult()
      );
      //console.log(input);
    }
  }

  deleteInput() {
    const input = "";
    this.setState({
      input: input,
      result: "",
      displayResult: false
    });
  }

  calculateInput() {
    let input = this.state.input.replace(/\b0+/g, "");

    while (endsWithOperator.test(input)) {
      input = input.slice(0, -1);
      //console.log(input);
    }
    // eslint-disable-next-line
    const evaluate = eval(input);

    if (isOperator.test(input) && !endsWithOperator.test(input)) {
      this.setState({
        result: evaluate,
        displayResult: true,
        input: ""
      });
    } else if (!isOperator.test(input)) {
      this.setState({
        result: input,
        displayResult: true,
        input: ""
      });
    }
  }

  displayResult() {
    let input = this.state.input.replace(/\b0+/g, "");

    while (endsWithOperator.test(input)) {
      input = input.slice(0, -1);
      //console.log(input);
    }
    // eslint-disable-next-line
    const evaluate = eval(input);

    if (isOperator.test(input) && !endsWithOperator.test(input)) {
      this.setState({
        result: evaluate
      });
    } else if (!isOperator.test(input)) {
      this.setState({
        result: input
      });
    }
    //console.log("input length", input.length, "input:", input);
  }

  render() {
    return (
      <div className="React Calculator">
        <h1>Calculator</h1>

        <Display
          displayResult={this.state.displayResult}
          input={this.state.input}
          result={this.state.result}
        />

        <Keys
          deleteInput={this.deleteInput}
          displayInput={this.displayInput}
          deleteLast={this.deleteLast}
          calculateInput={this.calculateInput}
        />
      </div>
    );
  }
}

export default App;
