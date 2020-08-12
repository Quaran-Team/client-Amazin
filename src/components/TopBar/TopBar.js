import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import Flag from "./Flag";
import SignIn from "./SignIn";
import Returns from "./Returns";
import Prime from "./Prime";
import Cart from "./Cart";

import './topbar.css';
import WorkinMenu from "./WorkinMenu";

export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <WorkinMenu/>
        {/* <Menu/> */}
        <Logo/>
        <SearchBar/>
        <Flag/>
        <SignIn/>
        <Returns/>
        <Prime/>
        <Cart/>
        <div className="paddinnn"></div>
      </div>
    );
  }
}