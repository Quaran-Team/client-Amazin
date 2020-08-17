import React, { Component } from "react";
import "./qacomponent.css";

export default class Votes extends Component {
  constructor(props) {
    super(props);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleChangeSubtract = this.handleChangeSubtract.bind(this);
  }

  state = {
    votes: 0,
  };

  handleChangeAdd(e) {
    let currentVotes = parseInt(e);
    this.setState({ votes: currentVotes + 1 });
  }

  handleChangeSubtract(e) {
    let currentVotes = parseInt(e);
    this.setState({ votes: currentVotes - 1 });
  }

  render() {
    return (
      <div className="votes">
        <button
          id="add"
          onClick={() => this.handleChangeAdd(this.state.votes)}
        >
          <i className="arrow-up"></i>
        </button>
        <input id="votes" type="number" value={this.state.votes} />
        votes
        <button
          id="subtract"
          onClick={() => this.handleChangeSubtract(this.state.votes)}
        >
          <i className="arrow-down"></i>
        </button>
      </div>
    );
  }
}
