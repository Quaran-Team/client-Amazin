import React, { Component } from "react";
import Axios from "axios";
import BadStar from "../../RatingSummary/badStar";
import LowStar from "../../RatingSummary/lowStar";
import MidStar from "../../RatingSummary/midStar";
import GoodStar from "../../RatingSummary/goodStar";
import HighStar from "../../RatingSummary/highStar";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.prodID,
		};
	}

	hasTag = (tag, tag_title) => {
		if (tag === true) {
			console.log(tag, tag_title);
			switch (tag_title) {
				case "#1 Best Seller":
					return <div className="best">#1 Best Seller</div>;
					break;
				case "Amazin's Choice":
					return <div className="choice">Amazin's Choice</div>;
					break;
				default:
					"";
			}
		} else {
			<div></div>;
		}
	};

	determineRating = (rate) => {
		if (rate <= 1) {
			return <BadStar />;
		} else if (rate <= 2) {
			console.log(rate, "lowstar");
			return <LowStar />;
		} else if (rate <= 3) {
			console.log(rate, "midstar");
			return <MidStar />;
		} else if (rate <= 4) {
			return <GoodStar />;
		} else if (rate <= 5) {
			console.log(rate, "hightstar");
			return <HighStar />;
		}
	};

	render() {
		return (
			<div>
				<div id="titleSection" className="a-section a-spacing-none">
					<h2 id="title" className="a-size-large a-spacing-none">
						<span
							id="productTitle"
							className="a-size-large product-title-word-break"
						>
							{this.props.title}
						</span>
					</h2>
				</div>
				<div id="bylineInfo_feature_div" className="celwidget">
					<div className="a-section a-spacing-none">by</div>{" "}
					{this.props.seller}
				</div>
				<div
					id="averageCustomerReviews_feature_div"
					className="celwidget"
				>
					<div id="averageCustomerReviews">
						<span className="a-decalrative">
							<span
								id="acrPopover"
								className="reviewCountTextLinkedHistogram noUnderline"
							>
								<span className="a-declarative">
									{this.determineRating(this.props.rating)}
								</span>
							</span>
						</span>
					</div>
				</div>
				<div id="badge-wrapper" className="celwidget">
					<a className="badge-link" href={this.props.category_link}>
						{this.hasTag(this.props.tag, this.props.tag_title)}
						<span className="cat-name">
							<span className="cat-link">
								in "{this.props.category}"
							</span>
						</span>
					</a>
				</div>
			</div>
		);
	}
}
export default Header;
