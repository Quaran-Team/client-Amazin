import React, { Component } from "react";
import ReviewProduct from "./ReviewProduct";
import CustomerImages from "./CustomerImages";
import ReviewMentions from "./ReviewMentions";
import StarRating from "./StarRating";
import Grid from "@material-ui/core/Grid";
import CustomerReviewsDataService from "../../service/CustomerReviewsDataService";

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
		CustomerReviewsDataService.retrieveCustomerReviews(1).then(
			(response) => {
				this.setState({ response: response.data });
			}
		);
	}
    
    render() { 
        return ( 
            <div>
                <h1> Customer Reviews</h1>
                <Grid container justify="flex-start" alignItems="flex-start">
                    <Grid item sm={4}>
                        <div><StarRating /></div>
                          <br />
                        <div><ReviewProduct /></div>
                    </Grid>
                  
                    <Grid item sm>
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
