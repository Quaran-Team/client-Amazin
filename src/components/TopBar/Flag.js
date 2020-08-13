import React, { Component } from "react";
// import flag from "./usFlag.JPG";

export default class Flag extends Component {
  render() {
    return (
      <div className="flag">
        <h4>
          {" "}
          <a className="pickyflag">
            <img
              className="topbarflag"
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="USA flag"
            />
            <span className="topflagspacer">v</span>
          </a>
        </h4>
      </div>
    );
  }
}
