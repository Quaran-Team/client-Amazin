import React, { Component } from 'react';
import Axios from 'axios';

class Header extends Component {
    constructor (props){
        super(props)
        this.state = {
            id : props.id
        }
    }

    hasTag = (tag, tag_title) => {
        if (tag === true) {
            switch(tag_title) {
                case "#1 Best Seller":
                    break;
                case "Amazin's Choice": 
                    return <div className="choice">Amazin's Choice</div>
                    break;
                default: ""
            } 
        }else {
            <div></div>
        }
    }

    render(){
        return(
            <div>
                <div id="titleSection" className="a-section a-spacing-none">
                    <h1 id="title" className="a-size-large a-spacing-none">
                        <span id="productTitle" className="a-size-large product-title-word-break">
                            {this.props.title}
                        </span>
                    </h1>
                </div>
                <div id="bylineInfo_feature_div" className="celwidget">
                    <div className="a-section a-spacing-none">
                        by
                    </div>
                    <a id="bylineInfo" className="a-link-normal" href="*"> {this.props.seller}</a>
                </div>
                <div id="averageCustomerReviews_feature_div" className="celwidget">
                    <div id="averageCustomerReviews">
                        <span className="a-decalrative">
                            <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline">
                                <span className="a-declarative">
                                   {this.props.rating}
                                </span>
                                <span id="arcCustomerReviewText" className="a-size-base">{this.props.user_rating}</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div id="badge-wrapper" className="celwidget">
                    <a className="badge-link" href={this.props.category_link}>
                            {this.hasTag(this.props.tag, this.props.tag_title)}
                        <span className="cat-name">
                            <span className="cat-link">in {this.props.category} </span>
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}
export default Header;
