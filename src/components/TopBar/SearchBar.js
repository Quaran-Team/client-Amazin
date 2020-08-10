import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
          <div className="catselect"> All v</div>
        <input className="barattop" type="text"></input>
        <button id="magnifyglass" className="notafingah"> 🔍 </button>
      </div>
    );
  }
}
