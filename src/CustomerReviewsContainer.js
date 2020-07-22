import React, { Component } from 'react';
import ReviewProduct from "./components/ReviewProduct"
import CustomerImages from './components/CustomerImages';
import ReviewMentions from './components/ReviewMentions';
import StarRating from './components/StarRating';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class CustomerReviewsContainer extends Component {
    
    
    render() { 
        return ( 
            <div>
                <h1> Customer Reviews</h1>
                <Grid container justify="flex-start" alignItems="flex-start">
                    <Grid item sm={4}>
                        <div><StarRating /></div>
                          <Divider variant="middle" />
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
 
export default CustomerReviewsContainer;

