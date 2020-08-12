import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(){
    super()
    this.state = {

    }

    this.handleSearch = this.handleSearch.bind(this);
}

handleSearch(e){
  alert("You are searching for something")
  e.preventDefault(e);
}

  render() {
    return (
      <div className="searchbar">
          <div className="catselect"> All v</div>
        <input className="barattop" type="text"></input>
        <button id="magnifyglass" className="notafingah"
        onClick={this.handleSearch}> 🔍 </button>
      </div>
    );
  }
}
