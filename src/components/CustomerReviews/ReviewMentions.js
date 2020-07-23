import React, { Component } from 'react';


class ReviewMentions extends Component {


    render() { 

        return ( 
            <div>
                <h3>Read reviews that mention</h3>
                <span><button>filtered button</button></span>
                <br />
                <br />
                <span><button>top reviews</button></span>
                <div><img src=""></img></div>
                <br />
                <p><div>star rating ***</div><h3><a href="/">Review headline</a></h3></p>
                <p><div>Country & Date</div></p>
                <p><div>Verified Purchase</div></p>

                <p>submitted review form goes here</p>
            </div>
         );
    }
}
 
export default ReviewMentions;