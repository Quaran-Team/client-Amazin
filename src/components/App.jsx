import React, { Component } from "react";
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviews";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import "../Css/App.css";

class App extends Component {
	render() {
		return (
			<div className="app">
				<PhotoGallery />
				<div id="PurchaseItemContainer_Placeholder">
					{/*place holder: replace when ready*/}
				</div>
				<CustomerReviewsContainer />
				<QAcomponent />
				<ComparisonGrid />
				<CImagesAll />
				<CWBA />
				<Appples /> 
			</div>
		);
	}
}

export default App;
