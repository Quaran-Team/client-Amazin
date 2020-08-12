import React, { Component } from "react";
import Product from "./productVariant/Product.jsx";
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviews";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
<<<<<<< HEAD
import "../Css/App.css";
=======
import TopBar from "./TopBar/TopBar";
// import "../Css/App.css";
>>>>>>> 56dd450d49838bf826f85b8965b620cbe88db889

class App extends Component {
	render() {
		return (
			<div className="app">
<<<<<<< HEAD
				<h1>My React App</h1>
=======
				<div><TopBar/></div>
				
>>>>>>> 56dd450d49838bf826f85b8965b620cbe88db889
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
