import React, { Component } from 'react';

class StarRating extends Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1
        };
    }
     
    render() { 
        return ( 
            <div>
                <h3>Star Ratings</h3>
                <br />
                <br />
            </div>
         );
    }
}
 
export default StarRating;