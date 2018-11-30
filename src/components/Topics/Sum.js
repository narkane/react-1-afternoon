import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.sum = 0;

    this.sum = parseInt(this.state.number1) + parseInt(this.state.number2);
    this.setState({ sum: this.sum });
  }

  render() {
    return (
      <div className="puzzleBox SumPB">
        <h4>DIM SUM!</h4>
        ...this glass tastes like blood Randy... <br />
        {JSON.stringify(this.state.unfilteredArray)}
        <input
          className="inputLine"
          onChange={event => {
            this.setState({ number1: event.target.value });
          }}
        />
        <input
          className="inputLine"
          onChange={event => {
            this.setState({ number2: event.target.value });
          }}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          <font size="5">AAAAAAAAAAAAAAAAH!!~~</font>
        </button>
        <span className="resultsBox">
          Yum yum, heres the SUM!: {JSON.stringify(this.state.sum)}
        </span>
      </div>
    );
  }
}

export default Sum;
