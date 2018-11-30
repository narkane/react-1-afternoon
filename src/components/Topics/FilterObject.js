import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [
        { name: "Bob", cow: true },
        { name: "Cow?", cow: false, alive: true, good_source_of_leather: true },
        { name: "Jane", cow: true, alive: false }
      ],
      userInput: "",
      filteredArray: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.gData = [];

    for (let each in this.state.unfilteredArray) {
      for (let prop in this.state.unfilteredArray[each]) {
        if (prop == this.state.userInput) {
          this.gData.push(this.state.unfilteredArray[each]);
          console.log("burp!");
        }
      }
    }
    this.setState({ filteredArray: this.gData });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Unfiltered: <br />
          {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={event => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          <font size="5">Cowculate!</font>
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: <br />
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
