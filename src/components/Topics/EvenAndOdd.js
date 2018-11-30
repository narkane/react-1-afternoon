import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.eData = [];
    this.oData = [];

    for (let each in this.state.userInput) {
      if (this.state.userInput[each] % 2 == 0) {
        this.eData.push(this.state.userInput[each]);
      } else if (this.state.userInput[each] % 2 == 1) {
        this.oData.push(this.state.userInput[each]);
      }
    }
    this.setState({ evenArray: this.eData });
    this.setState({ oddArray: this.oData });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={event => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          <font size="5">Calculate!</font>
        </button>
        <span className="resultsBox">
          {"Evens: [" + this.state.evenArray + "]"}
        </span>
        <span className="resultsBox">
          {" Odds: [" + this.state.oddArray + "]"}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
