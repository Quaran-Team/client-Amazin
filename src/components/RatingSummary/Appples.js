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
        <h3>Mid</h3>
        <MidStar />
        <h3>Good</h3>
        <GoodStar />
        <h3>High</h3>
        <HighStar />
      </div>
    );
  }
}


