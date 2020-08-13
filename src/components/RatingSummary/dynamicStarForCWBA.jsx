import React, { Component } from "react";
import "./stars.css";
import Axios from "axios";
import zOneStar from "./zOneStar";
import zTwoStar from "./zTwoStar";
import zThreeStar from "./zThreeStar";
import zFourStar from "./zFourStar";
import zFiveStar from "./zFiveStar";

export default class DynamicStarSpecial extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    resData: "",
    totalRating: "",
    floorRating: null,
    itemId: this.props.associatedItem
  };

  componentDidMount() {
    this.loadItem(this.props.params);
  }
/// load it
  loadItem = (params) => {
    params = this.state.itemId
    //calls the product by id
    Axios({
      method: "GET",
      url: `http://localhost:8080/api/v1/totalstars/${params}`,
    }).then((res) => {
      //all the properties of the product are saved in state - these do not change upon selection.
      this.setState({
        resData: res.data,
        willRoundRating: res.data.overallRating,
        totalRating: res.data.totalFiveStarRating + res.data.totalFourStarRating + res.data.totalThreeStarRating + res.data.totalTwoStarRating + res.data.totalOneStarRating
      });
      
    });
  };


  render() {
    const numberOfReview = this.state.totalRating
    const goldAndGreyRender =()=> {
      const roundRating = Math.round(this.state.willRoundRating)
      console.log(roundRating)
      switch(roundRating){
        // case 0:
        // case 1:
        //   <zOneStar/>
        //   break;
        // case 2:
        //   <zTwoStar/>
        //   console.log("2")
        //   break;
        // case 3:
        //   <zThreeStar/>
        //   break;
        // case 4:
        //   <zFourStar/>
        //   break;
        // case 5:
        //   <zFiveStar/>
        //   break;
        default:
          return <zOneStar/>
          console.log("yeet")
          break;
      }
    }
    
    
    return (
      <div>
        <div
          className="dynamicstar"
        >
          <div className="dynamichover">

            {goldAndGreyRender()}


            {numberOfReview}

          </div>
        </div>
      </div>
    );
  }
}
