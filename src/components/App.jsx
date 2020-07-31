import React, { Component } from "react";
import Product from "./productVariant/Product.jsx";
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviewsContainer";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery.jsx";
import "../Css/App.css"; //This is set to color every other member in App. Helps track placement.

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1>My React App</h1>
				<PhotoGallery />
				<Product />
				<div id="PurchaseItemContainer_Placeholder"></div>
				{/*place holder: replace when ready*/}
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
