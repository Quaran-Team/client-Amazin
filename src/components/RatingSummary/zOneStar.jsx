import React, { Component } from "react";
import "./stars.css";

export default class zOneStar extends Component {
  render() {
    return (
      <div className="dynamicstar">
        <div className="dynamichover">
          <span className="gold">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
        </div>
      </div>
    );
  }
}