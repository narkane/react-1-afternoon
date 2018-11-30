import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [
        "Scooby Dooby Doo!",
        "Yabba Dabba Doo!",
        "'Yabba' is the nickname of Stephen Gascoigne (1878–1942)."
      ],
      userInput: "",
      filteredArray: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.gData = [];

    for (let each in this.state.unfilteredArray) {
      if (this.state.unfilteredArray[each].includes(this.state.userInput)) {
        this.gData.push(this.state.unfilteredArray[each]);
        console.log("burp!");
      }
    }
    this.setState({ filteredArray: this.gData });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter Straaaa~ng!</h4>
        <span className="puzzleText">
          Heres some stringy junk y0: <br />
          {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={event => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          <font size="5">Cackle8!</font>
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: <br />
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
