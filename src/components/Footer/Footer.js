// this is gonna be the one to rule them all

import React, { Component } from "react";
import "./footer.css";

import Bluefoot from "./Bluefoot";
import Prefoot from "./Prefoot";
import BottomLine from "./BottomLine";

export default class Footer extends Component {
  render() {
    return (
      <div className="endofpage">
        <Bluefoot />
        <Prefoot />
        <BottomLine />
      </div>
    );
  }
}
