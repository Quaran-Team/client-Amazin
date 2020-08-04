import React, { Component } from 'react';
import BadChartMock from '../RatingSummary/badChartmock';
import "./CustomerReviews.css" 


class StarRating extends Component {

     
    render() { 
        return ( 
            <div>
                <h3>Star Ratings</h3>
                <div><BadChartMock /></div>
                <br />
            </div>
         );
    }
}
 
export default StarRating;