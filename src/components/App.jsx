import React, { Component } from "react";
import TopBar from "./TopBar/TopBar";
import BlueSecondTopLine from "./SecondTopLine/BlueSecondTopline";
import Footer from "./Footer/Footer";
import Axios from "axios";

class App extends Component {

  state = {
    items: []
  }

  componentDidMount(){
    this.Items();
  }

  Items = () => {
    Axios({
      method: "GET",
      url: `http://localhost:8080/all/products/`,
    }).then(res => {
      this.setState({ items: res.data.slice(1)})
    })
  }


  render() {
    return (
      <div className="app">
        <div>
          <TopBar />
        </div>
        <BlueSecondTopLine/>
          <h1 style={{ textAlign: "center"}}>View our Products</h1>
          <div className="item-div-container">
          {this.state.items.map( item => <a href={"/singleItem/"+ item.itemId}>
                <button id="frontpage-btn">
                  <h3>{item.itemName}</h3>
                  <p>{item.itemCategory}</p>
                </button>
              </a>)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
