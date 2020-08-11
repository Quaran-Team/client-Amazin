import React, { Component } from "react";
import ReviewProduct from "./ReviewProduct";
import CustomerImages from "./CustomerImages";
import ReviewMentions from "./ReviewMentions";
import StarRating from "./StarRating";
import Grid from "@material-ui/core/Grid";
import CustomerReviewsDataService from "../../service/CustomerReviewsDataService";
import GoodChartMock from '../RatingSummary/goodChartmock';

class CustomerReviews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: null,
		};
		this.refreshCustomerReviews = this.refreshCustomerReviews.bind(this);
	}

	componentDidMount() {
		this.refreshCustomerReviews();
	}

    refreshCustomerReviews() {
        CustomerReviewsDataService.retrieveAllCustomerReviews()
        .then(
            response => {
                this.setState({ response: response.data })
            }
        )
    }
    
    render() { 
        return ( 
            <div>
                <h1> Customer Reviews</h1>
                <Grid container justify="flex-start" alignItems="flex-start" id="left-grid">
                    <Grid item sm={4}>
                        <div><GoodChartMock/></div>
                          
                        <div className="review-product"><ReviewProduct /></div>
                    </Grid>
                    
                    <Grid item sm id="right-grid">
                        <div><CustomerImages /></div> 
                        <br />
                        <div><ReviewMentions /></div>
                    </Grid>
                </Grid>
            </div>
         );
    }
}

export default CustomerReviews;
