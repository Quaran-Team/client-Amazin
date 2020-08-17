import React, { Component } from "react";
import "./qacomponent.css";

export default class QASearch extends Component {
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
        <input className="bar" type="text" placeholder="🔍 Have a question? Search for answers"></input>
        <button className="search"
        onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}
