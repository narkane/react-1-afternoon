import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.noDrome = "true";

    for (let each in this.state.userInput) {
      if (
        this.state.userInput[each] !=
        this.state.userInput[this.state.userInput.length - each - 1]
      ) {
        this.noDrome = "false";
        console.log(this.state.userInput[each]);
        console.log(
          this.state.userInput[this.state.userInput.length - each - 1]
        );
      }
    }
    this.setState({ palindrome: this.noDrome });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>PALADIN-GNOME!</h4>
        <span className="puzzleText">
          Type a word.... OR ELSE#!?!~``` <br />
          {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={event => {
            this.setState({ userInput: event.target.value });
            this.noDrome = "";
          }}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          <font size="5">Cocoa-Latte!</font>
        </button>
        <span className="resultsBox">
          Palindrome: {JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    );
  }
}

export default FilterString;
