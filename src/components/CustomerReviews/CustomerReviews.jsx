import React, { Component } from "react";
import ReviewProduct from "./ReviewProduct";
import CustomerImages from "./CustomerImages";
import ReviewMentions from "./ReviewMentions";
import StarRating from "./StarRating";
import Grid from "@material-ui/core/Grid";
import CustomerReviewsDataService from "../../service/CustomerReviewsDataService";
import GoodChartMock from '../RatingSummary/goodChartmock';
import Ratings from "../productVariant/variant-Components/Ratings";

class CustomerReviews extends Component {
	constructor(props) {
		super(props);
		this.refreshCustomerReviews = this.refreshCustomerReviews.bind(this);
    }
    
    state={
        review: []
    }

	componentDidMount() {
		this.refreshCustomerReviews();
	}

    refreshCustomerReviews() {
        CustomerReviewsDataService.retrieveAllCustomerReviews()
        .then(
            response => {
                this.setState({ review: response.data })

            }
        )
    }

    mapping = () => {
        console.log(this.state.review)
        return(
            <div>
            {this.state.review.map( resp => <div><ReviewMentions id={resp.id} rate={resp.rating} body={resp.reviewBody} title={resp.reviewTitle} tag={resp.reviewTag} name={resp.reviewer}/></div>)}
            </div>
        )
    }
    
    render() { 
        return ( 
            <div>
                <h2> Customer Reviews</h2>
                
                <Grid container justify="flex-start" alignItems="flex-start" id="left-grid">
                    <Grid item sm={4}>
                        <div><GoodChartMock/></div>
                        
                        <div id="review-feature"> <hr/> <h3><strong>By feature</strong></h3><Ratings id={this.props.params} /></div>
                        <a>See more</a><hr/>
                          
                        <div className="review-product"><ReviewProduct /></div>
                    </Grid>
                    
                    <Grid item sm id="right-grid">
                        <div><CustomerImages /></div> 
                        <br />
                        {this.mapping()}
                       {/* {this.state.review.map( <div><ReviewMentions id={resp.id} rate={resp.rating} body={resp.reviewBody} title={resp.reviewTitle} tag={resp.reviewTag} name={resp.reviewer}/></div>)} */}
                    </Grid>
                </Grid>
            
            </div>
         );
    }
}

export default CustomerReviews;
