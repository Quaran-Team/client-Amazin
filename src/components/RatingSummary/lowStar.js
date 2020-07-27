import React, { Component } from "react";
// import "./stars.css"

// mock for two (2) stars summary rating

//   Sirius, the dog star, is moving closer to Earth at a rate of nine miles per second.
//  This means someday we could be in Sirius trouble.  ( -:

export default class LowStar extends Component {
  render() {
    return (
      <div className="lowstar">
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
            padding: "0px 20px 0px 5px"
          }}
        >
          {" "}
          v{" "}
        </span>
        <a  style={{fontSize: "13px"}}  href="#"> 4,158 ratings</a>
        <span className="line" style={{padding: "10px", fontSize: "13px"}}> | </span>
        
        <a  style={{fontSize: "13px"}}  href="#"> 723 answered questions</a>
      </div>
    );
  }
}
