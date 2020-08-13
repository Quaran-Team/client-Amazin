import React, { Component } from "react";
import ReviewProduct from "./ReviewProduct";
import CustomerImages from "./CustomerImages";
import ReviewMentions from "./ReviewMentions";
import StarRating from "./StarRating";
import Grid from "@material-ui/core/Grid";
import CustomerReviewsDataService from "../../service/CustomerReviewsDataService";
import GoodChartMock from "../RatingSummary/goodChartmock";
import Ratings from "../productVariant/variant-Components/Ratings";

class CustomerReviews extends Component {
  constructor(props) {
    super(props);
    this.refreshCustomerReviews = this.refreshCustomerReviews.bind(this);
  }

  state = {
    review: [],
    dropmenu: "drop",
    menuitem: "top",
  };

  componentDidMount() {
    this.refreshCustomerReviews();
  }

  refreshCustomerReviews() {
    CustomerReviewsDataService.retrieveAllCustomerReviews().then((response) => {
      this.setState({ review: response.data });
      // const filteredArray = response.data.filter( item => item.itemId == this.props.params)
      //this.setState({ review: filteredArray})
    });
  }

  menu = () => {
    if (this.state.menuitem == "top") {
      return (
        <div>
          <button id="top" onClick={() => this.top()}>
            Top Reviews <i className="arrow down"></i>
          </button>
          <button id="most" onClick={() => this.most()}>
            Most Recent{" "}
          </button>
        </div>
      );
    } else if (this.state.menuitem == "most") {
      return (
        <div>
          <button id="most" onClick={() => this.most()}>
            Most Recent <i className="arrow down"></i>
          </button>
          <button id="top" onClick={() => this.top()}>
            Top Reviews{" "}
          </button>
        </div>
      );
    }
  };
  top = () => {
    this.setState({ menuitem: "top" });
    this.menu(this.state.menuitem);
  };

  most = () => {
    this.setState({ menuitem: "most" });
    this.menu(this.state.menuitem);
  };

  mapping = () => {
    console.log(this.state.review);
    return (
      <div>
        {this.state.review.map((resp) => (
          <div>
            <ReviewMentions
              id={resp.id}
              rate={resp.rating}
              body={resp.reviewBody}
              title={resp.reviewTitle}
              tag={resp.reviewTag}
              name={resp.reviewer}
            />
          </div>
        ))}
      </div>
    );
  };

  drop = () => {
    if (this.state.dropmenu === "drop") {
      this.setState({ dropmenu: "down" });
    } else {
      this.setState({ dropmenu: "drop" });
    }
  };

  menu = () => {
    if (this.state.menuitem == "top") {
      return (
        <div>
          <button id="top" onClick={() => this.top()}>
            Top Reviews <i className="arrow down"></i>
          </button>
          <button id="most" onClick={() => this.most()}>
            Most Recent{" "}
          </button>
        </div>
      );
    } else if (this.state.menuitem == "most") {
      return (
        <div>
          <button id="most" onClick={() => this.most()}>
            Most Recent <i className="arrow down"></i>
          </button>
          <button id="top" onClick={() => this.top()}>
            Top Reviews{" "}
          </button>
        </div>
      );
    }
    top = () => {
      this.setState({ menuitem: "top" });
      this.menu(this.state.menuitem);
    };
    most = () => {
      this.setState({ menuitem: "most" });
      this.menu(this.state.menuitem);
    };
  };

  render() {
    return (
      <div>
        <h1> Customer Reviews</h1>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          id="left-grid"
        >
          <Grid item sm={4}>
            <div>
              <GoodChartMock />
            </div>
            <div id="review-feature">
              {" "}
              <hr />{" "}
              <h3>
                <strong>By feature</strong>
              </h3>
              <Ratings id={this.props.params} />
            </div>
            <a>See more</a>
            <hr />
            <div className="review-product">
              <ReviewProduct />
            </div>
          </Grid>

          <Grid item sm id="right-grid">
            <div>
              <CustomerImages />
            </div>
            <br />
            <div className="review-mention">
              <h3>Read reviews that mention</h3>
              <span>
                <button id="button">filtered button</button>
              </span>
            </div>
            <br />
            <br />
            <div className="dropdown">
              <div id={this.state.dropmenu} onClick={() => this.drop()}>
                {this.menu()}
              </div>
            </div>
            {this.state.review.map((resp) => (
              <div>
                <ReviewMentions
                  id={resp.id}
                  rate={resp.rating}
                  body={resp.reviewBody}
                  title={resp.reviewTitle}
                  tag={resp.reviewTag}
                  name={resp.reviewer}
                />
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CustomerReviews;
