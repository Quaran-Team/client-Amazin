import React, { Component } from 'react';
import "./CustomerReviews.css" 


class ReviewMentions extends Component {
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
                <div className="review-mention">
                    <h3>Read reviews that mention</h3>
                    <span><button id="button">filtered button</button></span>
                </div>
                    <br/>
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
                    <span className="profile-name">  Customer Name</span></div>
                </div>
                <tr>
                    <td><span className="star-icon">*Star rating icon* <a href="link to customer review summary page" className="review-title">Review title!</a></span>
                    </td>    
                </tr>
                <div className="review-date">Review Date</div>
                <span className="vp" >Verified Purchase</span>
                
                <div><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tericies mi vitae est. 
                    Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
                    Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. 
                    Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. 
                    Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. 
                    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>mpor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                    Aenean ult</div>
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