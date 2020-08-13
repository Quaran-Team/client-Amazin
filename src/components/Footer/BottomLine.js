import React, { Component } from "react";
import "./footer.css";

export default class BottomLine extends Component {
  render() {
    return (
      <div className="bottomline" id="foot">
        <a href="#foot" className="bottomlinks">
          Conditions of Use
        </a>
        <a href="#foot" className="bottomlinks">
          Privacy Notice
        </a>
        <a href="#foot" className="bottomlinks">
          Interest-Based Ads
        </a>
        <a href="#foot" className="notalink">
          {" "}
          &#169; 2020, Talent Path or its affiliates{" "}
        </a>
      </div>
    );
  }
}
