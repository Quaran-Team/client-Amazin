import React, { Component } from 'react';
import "./CustomerReviews.css";
import BadStar from "../RatingSummary/badStar";
import LowStar from "../RatingSummary/lowStar";
import MidStar from "../RatingSummary/midStar";
import GoodStar from "../RatingSummary/goodStar";
import HighStar from "../RatingSummary/highStar";


class ReviewMentions extends Component {
    constructor(props) {
        super(props)
    }
   
    state = {
        count: 0
    };

    handleClick = ()=> {
        this.setState(({count}) => ({
            count: count + 1
        }));
    };

    starLogic = (rate) =>{
        if (rate <= 1){
			return(<BadStar />)
		} else if (rate <=2){
			console.log(rate, "lowstar")
			return(<LowStar />)
		} else if (rate <=3){
			console.log(rate, "midstar")
			return(<MidStar />)
		} else if (rate <= 4){
			return(<GoodStar />)
		} else if (rate <=5){
			console.log(rate, "hightstar")
			return(<HighStar />)
	    }
    }


    render() { 

        return ( 
            <div>
                <div className="review-mention">
                    <h3>Read reviews that mention</h3>
                    <span>
                        <button id="button">reviewTag</button> <button id="button">reviewTag</button> <button id="button">reviewTag</button>
                    </span>
                </div>
                    <br/>
                   <div className="dropdown">
                        <button id="dropbtn">Top reviews</button>
                        
                        <div className="dropdown-content">
                            <a href="#">Most recent</a>
                        </div>
                   </div>


                <br />
                <br />
                <div>
                    <div className="profile-avatar">
                        <img className="profile-avatar-img" 
                        src="https://www.amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png">
                        </img>
                    <span className="profile-name">{this.props.name}</span></div>
                </div>
                <tr>
                    <td><span className="star-icon"> {this.starLogic(this.props.rate)} <a href="link to customer review summary page" className="review-title">{this.props.title}</a></span>
                    </td>    
                </tr>
                <div className="review-date">Review Date</div>
                <span className="vp" >Verified Purchase</span>
                
                <div>
                    {this.props.body}
                </div>
                <br />

                <div>
                    <span>
                        <p id="count-btn"> {this.state.count} people found this helpful</p>
                    </span>
                </div>
                <table>
                    <tr>
                        <td><button id="helpful-button" onClick={this.handleClick}>Helpful</button></td>
                        <td><a href="/">Comment</a></td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default ReviewMentions;