import React, { Component } from "react";
// import "./stars.css"
import Tooltip from "@material-ui/core/Tooltip";
import LowChartMock from "./lowChartMock";
// mock for two (2) stars summary rating

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

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
            <div className="lowhover" style={{ display: "inline-block" }}>
              <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
                &#9733;
              </span>
              <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
                &#9733;
              </span>
              <span className="gray" style={{ color: "gray" }}>
                &#9733;
              </span>
              <span className="gray" style={{ color: "gray" }}>
                &#9733;
              </span>
              <span className="gray" style={{ color: "gray" }}>
                &#9733;
              </span>
              <span
                className="tiny"
                style={{
                  position: "relative",
                  top: "-8px",
                  fontSize: "10px",
                  padding: "0px 20px 0px 5px",
                }}
              >
                {" "}
                v{" "}
              </span>
            </div>
          {/* </Tooltip> */}
          <div className="lsratQs" style={{ display: "inline-block" }}>
            <a style={{ fontSize: "13px" }} href="#">
              {" "}
              4,158 ratings
            </a>
            <span
              className="line"
              style={{ padding: "10px", fontSize: "13px" }}
            >
              {" "}
              |{" "}
            </span>

            <a style={{ fontSize: "13px" }} href="#">
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
