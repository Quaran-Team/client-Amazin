import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ReviewProduct extends Component {
    
    render() { 
        return ( 
            <div>
                <h3>Review this product</h3>
                <h5>Share your thoughts with other customers</h5>
                <Button variant="contained">Write a customer review</Button>
            </div>
         );
    }
}
 
export default ReviewProduct;