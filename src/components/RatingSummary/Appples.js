import React, { Component } from "react";

import BadStar from "./badStar";
import LowStar from "./lowStar";
import MidStar from "./midStar";
import GoodStar from "./goodStar";
import HighStar from "./highStar";

export default class Appples extends Component {
  render() {
    return (
      <div>
        <h1>mock star summary ratings</h1>

        <h3>Bad</h3>
        <BadStar />
         <h3>Low</h3>
        <LowStar />
       <h4>below is offset on purpose</h4>
        <div style={{ marginLeft: "140px" }}>
          <h3>Mid</h3>

          <MidStar />
        </div>

        <h3>Good</h3>
        <GoodStar />
        <h3>High</h3>
        <HighStar />
        <div
          className="exspace"
          style={{ backgroundColor: "pink", height: "300px" }}
        >
          {" "}
          <p style={{margin:"10px", padding:"20px"}}>
          this is here to help keep the page from jumping all glithcy when the
          modals pop up near the bottom of the screen
          </p>
        </div>

        <p>lorem at the end</p>
      </div>
    );
  }
}
