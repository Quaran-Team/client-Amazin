import React, { Component } from "react";
// import "./stars.css"
import Tooltip from "@material-ui/core/Tooltip";
import MidChartMock from './midChartMock';
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
      <div className="midstar" 
      onMouseEnter={this.handleMouseHover}
      onMouseLeave={this.handleMouseHover}>
        <Tooltip
          title="3.3 out of 5 stars"
          aria-label="3.3 out of 5 stars"
          placement="bottom"
        >
          <div className="midhover" style={{display:"inline-block"}}>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
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
        </Tooltip>
        <div className="msratQs"style={{display:"inline-block"}} >
        <a style={{ fontSize: "13px" }} href="#">
          {" "}
          458 ratings
        </a>
        <span className="line" style={{ padding: "10px", fontSize: "13px" }}>
          {" "}
          |{" "}
        </span>

        <a style={{ fontSize: "13px" }} href="#">
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
