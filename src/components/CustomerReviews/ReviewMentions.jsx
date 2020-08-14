import React, { Component } from 'react';
import "./CustomerReviews.css";


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

    render() { 

        return ( 
            <div>
                <br/>
                <br />
                <br />
                <div>
                    <div className="profile-avatar">
                        <img className="profile-avatar-img" 
                        src="https://www.amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png">
                        </img>
                    <span className="profile-name">{this.props.name}</span></div>
                </div>
                <table>
                    <tr>
                        <td><h4>*star rating goes here*</h4></td>
                        <td><a href="link to customer review summary page" 
                            className="review-title">{this.props.title}</a></td>
                    </tr>
                </table>
        <div className="review-date">{this.props.date}</div>
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