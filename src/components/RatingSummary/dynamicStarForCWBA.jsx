import React, { Component } from "react";
import "./stars.css";
import ZOneStar from "./zOneStar1";
import ZTwoStar from "./zTwoStar2";
import ZThreeStar from "./zThreeStar3";
import ZFourStar from "./zFourStar4";
import ZFiveStar from "./zFiveStar5";
import  "../CustomerWhoBoughtAlsoCmpnt/CWBA.css";

import axios from "axios";

export default class DynamicStarSpecial extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    totalRating: "",
    floorRating: null,
    itemId: this.props.associatedItem //**************************************************** */
  };

  componentDidMount() {
    this.loadItem(this.props.params);
  }

  // used from Brians and modified
  loadItem = (params) => {
    params = this.state.itemId
    //calls the product by id
    axios({
      method: "GET",
      url: `http://localhost:8080/api/v1/totalstars/${params}`,
    }).then((res) => {
      //all the properties of the product are saved in state - these do not change upon selection.
      this.setState({
        willRoundRating: res.data.overallRating,
        totalRating: res.data.totalFiveStarRating + res.data.totalFourStarRating + res.data.totalThreeStarRating + res.data.totalTwoStarRating + res.data.totalOneStarRating
      });
      
    });
  };


  render() {
    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const numberOfReview = formatNumber(this.state.totalRating)
    const goldAndGreyRender =()=> {
      const roundRating = Math.round(this.state.willRoundRating)
      switch(roundRating){
        case 0:
        case 1:
          return (<ZOneStar className="StarZ"/>)
        case 2:
          return (<ZTwoStar className="StarZ"/>)
        case 3:
          return (<ZThreeStar className="StarZ"/>)
        case 4:
          return (<ZFourStar className="StarZ"/>)
        case 5:
          return (<ZFiveStar className="StarZ"/>)
        default:
          return (<ZOneStar className="StarZ"/>)
      }
    }
    return (
      <div>
        <div
          className="dynamicstar"
        >
          <div className="dynamichover">
            {goldAndGreyRender()}
            <div className="hoverEffect">{numberOfReview } </div>
          </div>
        </div>
      </div>
    );
  }
}
