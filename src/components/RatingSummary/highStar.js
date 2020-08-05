import React, { Component } from "react";
import "./stars.css";
import Tooltip from "@material-ui/core/Tooltip";
import HighChartMock from "./highChartMock";

// five (5) star mock

export default class HighStar extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  render() {
    return (
      <div>
        <div
          className="highstar"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {/* <Tooltip
          title="4.9 out of 5 stars"
          aria-label="4.9 out of 5 stars"
          placement="bottom"
        > */}
          <div className="highhover">
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="tiny"> v </span>
          </div>
          {/* </Tooltip> */}
          <div className="hsratQs">
            <a href="#highChart"> 9,458 ratings</a>
            <span className="line"> | </span>

            <a href="#"> 167 answered questions</a>
          </div>
        </div>
        {this.state.isHovering && (
          <div>
            {" "}
            <HighChartMock />{" "}
          </div>
        )}
      </div>
    );
  }
}

// Q: What does the second best star win in a competition?
// A: A constellation prize!
