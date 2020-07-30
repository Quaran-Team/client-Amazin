import React, { Component } from "react";
import Product from "./productVariant/Product.jsx";
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviewsContainer";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery.jsx";

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
			<div>
				<h1>My React App</h1>
				<PhotoGallery />
				<Product />
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
