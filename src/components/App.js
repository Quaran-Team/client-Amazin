import React, { Component } from "react";

import BadStar from "./RatingSummary/badStar";
import LowStar from "./RatingSummary/lowStar";
import MidStar from "./RatingSummary/midStar";
import GoodStar from "./RatingSummary/goodStar";
import HighStar from "./RatingSummary/highStar";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>

        <h2>testing</h2>
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

export default App;
