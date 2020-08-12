import React, { Component } from "react";
import Product from "./productVariant/Product.jsx";
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviews";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Grid from "@material-ui/core/Grid";
import TopBar from "./TopBar/TopBar";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import "./primarypage.css";

class PrimaryPage extends Component {
	render() {
		return (
			<div className="app">
				<Grid>
					<TopBar />
					<Grid>
						<div className="productgrid-container">
							<div className="photogallery-grid-container">
								<PhotoGallery />
							</div>
							<div className="productvariant-grid-container">
								<Product
									key={this.props.match.params.id}
									params={this.props.match.params.id}
								/>
								<br />
							</div>
						</div>
					</Grid>
					<Grid>
						<ComparisonGrid
							key={this.props.match.params.id}
							params={this.props.match.params.id}
						/>
					</Grid>
					<Grid className="mainpage-grid qa-grid">
						<QAcomponent
							key={this.props.match.params.id}
							params={this.props.match.params.id}
						/>
					</Grid>
					<Grid
						style={{ width: "100vw" }}
						className="mainpage-grid customerReview-grid"
					>
						<CustomerReviewsContainer
							key={this.props.match.params.id}
							params={this.props.match.params.id}
						/>
					</Grid>
					<Grid>
						<CImagesAll />
					</Grid>
					<Grid>
						<CWBA />
					</Grid>
					<Appples
						key={this.props.match.params.id}
						params={this.props.match.params.id}
					/>
				</Grid>
			</div>
		);
	}
}

export default PrimaryPage;
