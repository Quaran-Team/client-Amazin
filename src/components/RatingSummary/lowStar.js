import React, { Component } from "react";
import "./stars.css";
import Tooltip from "@material-ui/core/Tooltip";
import LowChartMock from "./lowChartMock";

// mock for two (2) stars summary rating

//   Sirius, the dog star, is moving closer to Earth at a rate of nine miles per second.
//  This means someday we could be in Sirius trouble.  ( -:

export default class LowStar extends Component {
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
          className="lowstar"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {/* <Tooltip title="2.2 out of 5 stars" aria-label="2.2 out of 5 stars"> */}
          <div className="lowhover">
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gray">&#9733;</span>
            <span className="gray">&#9733;</span>
            <span className="gray">&#9733;</span>
            <span className="tiny"> v </span>
          </div>
          {/* </Tooltip> */}
          <div className="lsratQs">
            <a className="starLink" href="#lowChart">
              {" "}
              4,158 ratings
            </a>
            <span className="line"> | </span>

            <a className="starLink" href="#">
              {" "}
              723 answered questions
            </a>
          </div>
        </div>
        {this.state.isHovering && (
          <div>
            {" "}
            <LowChartMock />{" "}
          </div>
        )}
      </div>
    );
  }
}
