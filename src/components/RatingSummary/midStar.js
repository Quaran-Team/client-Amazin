import React, { Component } from "react";
import "./stars.css";
import Tooltip from "@material-ui/core/Tooltip";
import MidChartMock from "./midChartMock";

// mock for a three (3) star summary rating

// here's a 3 star joke...
// Orion’s Belt is a big waist of space!

export default class MidStar extends Component {
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
          className="midstar"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {/* <Tooltip
          title="3.3 out of 5 stars"
          aria-label="3.3 out of 5 stars"
          placement="bottom"
        > */}
          <div className="midhover">
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>

            <span className="gray">&#9733;</span>
            <span className="gray">&#9733;</span>
            <span className="tiny"> v </span>
          </div>
          {/* </Tooltip> */}
          <div className="msratQs">
            <a className="starLink" href="#midChart">
              {" "}
              458 ratings
            </a>
            <span className="line"> | </span>

            <a className="starLink" href="#">
              {" "}
              72 answered questions
            </a>
          </div>
        </div>
        {this.state.isHovering && (
          <div>
            {" "}
            <MidChartMock />{" "}
          </div>
        )}
      </div>
    );
  }
}
