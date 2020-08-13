import React, { Component } from "react";
import "./stars.css";

export default class zFiveStar extends Component {
  render() {
    return (
      <div>
        <div className="dynamicstar">
          <div className="dynamichover">
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
            <span className="gold">&#9733;</span>
          </div>
        </div>
      </div>
    );
  }
}