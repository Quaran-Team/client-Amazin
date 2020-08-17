import React, { Component } from 'react';
import './CustomerReviews.css'

class ReviewProduct extends Component {
    constructor(){
        super()
        this.state = {

        }

        this.handleReview = this.handleReview.bind(this);
    }

    handleReview(e) {
        alert("My product review!")
        e.preventDefault(e);
    }
    
    render() { 
        return ( 
            <div>
                <h3>Review this product</h3>
                <br />
                <p>Share your thoughts with other customers</p>
                <br />
                <a href="link to review form"><button id="review-button" onClick={this.handleReview}>Write a customer review</button></a>
            </div>
         );
    }
}
 
export default ReviewProduct;