import React, { Component } from "react";
import "./stars.css";
import  "../CustomerWhoBoughtAlsoCmpnt/CWBA.css";

export default class ZOneStar1 extends Component {
  render() {
    return (
      <div className="dynamicstarz">
          <span className="gold">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
      </div>
    );
  }
}