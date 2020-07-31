import React, { Component } from 'react';

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
                <h5>Share your thoughts with other customers</h5>
                <a href="link to review form"><button onClick={this.handleReview}>Write a customer review</button></a>
            </div>
         );
    }
}
 
export default ReviewProduct;