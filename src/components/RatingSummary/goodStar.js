import React, { Component } from "react";
import "./stars.css";
import Tooltip from "@material-ui/core/Tooltip";
import GoodChartMock from "./goodChartmock";

// four (4) star mock summary

export default class GoodStar extends Component {
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
          className="goodstar"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {/* <Tooltip
          title="4.1 out of 5 stars"
          aria-label="4.1 out of 5 stars"
          placement="bottom"
        > */}
          <div className="goodhover">
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gray">&#9733;</span>
            <span className="tiny"> v </span>
          </div>
          {/* </Tooltip> */}
          <div className="gsratQs">
            <a  className="starLink"  href="#goodChart"> 26,547 ratings</a>
            <span className="line"> | </span>

            <a className="starLink"   href="#">800 answered questions</a>
          </div>
        </div>
        {this.state.isHovering && (
          <div>
            {" "}
            <GoodChartMock />{" "}
          </div>
        )}
      </div>
    );
  }
}

// Q: What kind of stars wear sunglasses?
// A: Movie stars
// :-)
