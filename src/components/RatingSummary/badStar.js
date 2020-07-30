import React, { Component } from "react";
// import "./stars.css"
import Tooltip from "@material-ui/core/Tooltip";
import BadChartMock from "./badChartmock";

// this is for a one (1) star summary rating mock ...
// so here's a one star joke ...

// First star I see tonight
// I wish I may, I wish I might
// Oh wait, it’s just a satellite    :-)

export default class BadStar extends Component {
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
          className="badstar"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {/* <Tooltip title="1.2 out of 5 stars" aria-label="1.2 out of 5 stars"> */}
            <div className="badhover" style={{ display: "inline-block" }}>
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
          <div className="bsratQs" style={{ display: "inline-block" }}>
            <a style={{ fontSize: "13px" }} href="#">
              {" "}
              66,847 ratings
            </a>
            <span
              className="line"
              style={{ padding: "10px", fontSize: "13px" }}
            >
              {" "}
              |{" "}
            </span>

            <a style={{ fontSize: "13px" }} href="#">
              1000+ answered questions
            </a>
          </div>
        </div>
        {this.state.isHovering && (
          <div>
            {" "}
            <BadChartMock />{" "}
          </div>
        )}
      </div>
    );
  }
}
