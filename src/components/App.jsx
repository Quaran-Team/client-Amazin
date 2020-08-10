import React, { Component } from "react";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import TopBar from "./TopBar/TopBar";
// import "../Css/App.css";

class App extends Component {
	render() {
		return (
			<div className="app">
				<div><TopBar/></div>
				
				<PhotoGallery />
				<div id="PurchaseItemContainer_Placeholder">
					place holder: replace when ready
				</div>
				<CustomerReviews />
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
