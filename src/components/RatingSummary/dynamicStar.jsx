import React, { Component } from "react";
import "./stars.css";
import Axios from "axios";
import DynamicStarChart from "./dynamicStarChart";

export default class DynamicStar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ratingId: "",
    overallRating: "",
    totalFiveStarRating: "",
    totalFourStarRating: "",
    totalThreeStarRating: "",
    totalTwoStarRating: "",
    totalOneStarRating: "",
  };

  componentDidMount() {
    this.loadItem(this.props.params);
  }
/// load it
  loadItem = (params) => {
    //calls the product by id
    Axios({
      method: "GET",
      url: `http://localhost:8080/api/v1/totalstars/`,
    }).then((res) => {
      console.log(res.data);
      //all the properties of the product are saved in state - these do not change upon selection.
      this.setState({
        ratingId: res.data
        // .ratingid,
        // overallRating: res.data.overallRating,
        // totalFiveStarRating: res.data.totalFiveStarRating,
        // totalFourStarRating: res.data.totalFourStarRating,
        // totalThreeStarRating: res.data.totalThreeStarRating,
        // totalTwoStarRating: res.data.totalTwoStarRating,
        // totalOneStarRating: res.data.totalOneStarRating,
      });
      
    });
  };

  //     this.handleMouseHover = this.handleMouseHover.bind(this);
  //     this.state = {
  //       isHovering: false,
  //     };
  //   }

  //   handleMouseHover() {
  //     this.setState(this.toggleHoverState);
  //   }

  //   toggleHoverState(state) {
  //     return {
  //       isHovering: !state.isHovering,
  //     };
  //   }

  render() {
    return (
      <div>
        <div
          className="dynamicstar"
          //   onMouseEnter={this.handleMouseHover}
          //   onMouseLeave={this.handleMouseHover}
        >
          <div className="dynamichover">

    {/* need to update class names to make stars based off of response from server */}
            <span className="gold">&#9733;</span>

            <span className="gray">&#9733;</span>

            <span className="gray">&#9733;</span>

            <span className="gray">&#9733;</span>

            <span className="gray">&#9733;</span>

            <span className="tiny"> v </span>
          </div>

          <div className="dyratQs">
            <a className="starLink" href="#dynamicChart">
              {" "}
              10,222 ratings
            </a>
            <span className="line"> | </span>

            <a className="starLink" href="#">
              6419 answered questions
            </a>
          </div>
        </div>
        {/* {this.state.isHovering && (
          <div>
            {" "}
            <DynamicStarChart />{" "}
          </div>
        )} */}
      </div>
    );
  }
}
