import React, { Component } from "react";
// import "./stars.css"

// four (4) star mock summary

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
            fontSize: "10px",
            padding: "0px 20px 0px 5px"
          }}
        >
          {" "}
          v{" "}
        </span>
        <a  style={{fontSize: "13px"}} href="#"> 26,547 ratings</a>
        <span className="line" style={{padding: "10px", fontSize: "13px"}}> | </span>
        
        <a  style={{fontSize: "13px"}} href="#">800 answered questions</a>
      </div>
    );
  }
}


// Q: What kind of stars wear sunglasses?
// A: Movie stars
// :-)