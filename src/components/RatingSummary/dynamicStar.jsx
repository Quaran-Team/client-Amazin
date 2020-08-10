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

  loadItem = (params) => {
    //calls the product by id
    Axios({
      method: "GET",
      url: `http://localhost:8080/api/v1/totalstars/${params}`,
    }).then((res) => {
      console.log(res);
      //all the properties of the product are saved in state - these do not change upon selection.
      this.setState({
        ratingId: res.data.ratingid,
        overallRating: res.data.overallRating,
        totalFiveStarRating: res.data.totalFiveStarRating,
        totalFourStarRating: res.data.totalFourStarRating,
        totalThreeStarRating: res.data.totalThreeStarRating,
        totalTwoStarRating: res.data.totalTwoStarRating,
        totalOneStarRating: res.data.totalOneStarRating,
      });
      this.loadSelector();
    });
  };

  //this is all to figure out what the selection of the user is.
  //the work here reverts everything to default which is a boolean in the data.
  loadSelector = () => {
    //this pulls all the selections in
    Axios({
      method: "GET",
      url: `http://localhost:8080/api/v1/totalstars`,
    }).then((res) => {
      //filters out the selections based on the product
      const trueSelections = res.data.filter(
        (select) => select.ratingId === this.state.ratingId
      );
      //filters out the selection to the default selection of the product
      const defaultTrueSelection = trueSelections.filter(
        (defaulting) => defaulting.isdefault === true
      );
      //the default options have been separated out into this function which goes through how everything is
      //displayed after selecting default options.
      this.optionLogic(trueSelections);
      //catches the id of the selection
      this.setState({
        options: trueSelections,
        ratingId: defaultTrueSelection[0].ratingId,
        overallRating: defaultTrueSelection[0].overallRating,
        totalFiveStarRating: defaultTrueSelection[0].totalFiveStarRating,
        totalFourStarRating: defaultTrueSelection[0].totalFourStarRating,
        totalThreeStarRating: defaultTrueSelection[0].totalThreeStarRating,
        totalTwoStarRating: defaultTrueSelection[0].totalTwoStarRating,
        totalOneStarRating: defaultTrueSelection[0].totalOneStarRating,
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
              nn,nnn ratings
            </a>
            <span className="line"> | </span>

            <a className="starLink" href="#">
              jjjj answered questions
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
