import React, { Component } from "react";
// import "./stars.css"

export default class GoodStar extends Component {
  render() {
    return (
      <div className="goodstar">
        <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
          &#9733;
        </span>
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
        <span
          className="tiny"
          style={{
            position: "relative",
            top: "-8px",
            'font-size': "10px",
            padding: "0px 20px 0px 5px"
          }}
        >
          {" "}
          v{" "}
        </span>
        <a  style={{'font-size': "13px"}} href="#"> 26,547 ratings</a>
        <span className="line" style={{padding: "10px", 'font-size': "13px"}}> | </span>
        
        <a  style={{'font-size': "13px"}} href="#">800 answered questions</a>
      </div>
    );
  }
}
