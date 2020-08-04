import React, { Component } from "react";
import Product from "./productVariant/Product.jsx";
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviews";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery.jsx";
import "../Css/App.css"; //This is set to color every other member in App. Helps track placement.

class App extends Component {
	state = {
		items: [],
	};

	componentDidMount() {
		this.Items();
	}

	Items = () => {
		Axios({
			method: "GET",
			url: `http://localhost:8080/all/products/`,
		}).then((res) => {
			this.setState({ items: res.data.slice(1) });
		});
	};

	render() {
		return (
			<div className="app">
				<h1>My React App</h1>
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
