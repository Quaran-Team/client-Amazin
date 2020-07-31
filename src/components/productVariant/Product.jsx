import React, { Component } from "react";
import Header from "./variant-Components/Header";
import Availability from "./variant-Components/Availability.jsx";
import Options from "./variant-Components/Options.jsx";
import Sponsered from "./variant-Components/Sponsered.jsx";
import "./product.css";
import Ratings from "./variant-Components/Ratings";
import Axios from "axios";
// import { ListItemSecondaryAction } from '@material-ui/core';
import AboutList from "./variant-Components/AboutList";
// import Items from './dataTest/productTable.json'

class Product extends Component {
	state = {
		prodID: "",
		seller: "",
		user_rating: "",
		tag: "",
		tag_title: "",
		similar_item: "",
		rating: "",
		category: "",
		category_link: "",
		title: "",
		about_item: "",
		discount: "",
		price: "",
		list_price: "",
		shipping: "",
		ship_price: "",
		type_selector: "",
		selector_img: "",
		selector_text: "",
		message: "",
		inStock: 0,
		shipping_message: "",
		banner: "",
		lowstock_message: "",
		selection: 0,
	};

	componentDidMount() {
		const {
			match: { params },
		} = this.props;
		this.loadItem();
	}

	loadItem = () => {
		//calls the product by id
		Axios({
			method: "GET",
			url: `http://localhost:8080/variant/product/${this.props.match.params.id}`,
		}).then((res) => {
			//all the properties of the product are saved in state - these do not change upon selection.
			this.setState({
				prodID: res.data.id,
				seller: res.data.seller,
				tag: res.data.tag,
				tag_title: res.data.tag_title,
				similar_item: res.data.similar_item,
				rating: res.data.rating,
				category: res.data.category,
				category_link: res.data.category_link,
				user_rating: res.data.user_rating,
			});
			this.loadSelector();
		});
	};

	//this is all to figure out what the selection of the user is.
	//the work here reverts everything to default which is a boolean in the data.
	loadSelector = () => {
		//this pulls all the selections in
		Axios({
			method: "GET",
			url: `http://localhost:8080/variant/selector/`,
		}).then((res) => {
			//filters out the selections based on the product
			const trueSelections = res.data.filter(
				(select) => select.productID === this.state.prodID
			);
			//filters out the selection to the default selection of the product
			const defaultTrueSelection = trueSelections.filter(
				(defaulting) => defaulting.isdefault === true
			);
			//catches the id of the selection
			console.log(defaultTrueSelection[0]);
			this.setState({
				selection: defaultTrueSelection[0].id,
				title: defaultTrueSelection[0].title,
				about_item: defaultTrueSelection[0].about_item,
				discount: defaultTrueSelection[0].discount,
				list_price: defaultTrueSelection[0].list_price,
				shipping: defaultTrueSelection[0].shipping,
				ship_price: defaultTrueSelection[0].ship_price,
				type_selector: defaultTrueSelection[0].type_selector,
				selector_img: defaultTrueSelection[0].selector_img,
				selector_text: defaultTrueSelection[0].selector_text,
				inStock: defaultTrueSelection[0].instock,
				message: defaultTrueSelection[0].message,
				price: defaultTrueSelection[0].price,
				lowstock_message: defaultTrueSelection[0].lowstock_message,
				shipping_message: defaultTrueSelection[0].shipping_message,
				banner: defaultTrueSelection[0].banner,
			});
		});
	};

	//Once upon a time in a far, far away galaxy... I had all the calls in the same file. And then set state became finicky and would only pass half the info
	// loadDetails = () => {
	//     //calls the all of the details
	//     Axios({
	//         method: 'GET',
	//         url: `http://localhost:8080/variant/detail`
	//     }).then (res => {
	//         //filters the details based on the selection
	//         const details = res.data.filter( detail => detail.selectorID === this.state.selection )
	//         this.setState({
	//             details : details
	//         })
	//     })
	// }

	render() {
		return (
			<div className="productVariant">
				<Header
					key={this.state.prodID}
					prodID={this.state.prodID}
					seller={this.state.seller}
					user_ratings={this.state.user_rating}
					tag={this.state.tag}
					tag_title={this.state.tag_title}
					rating={this.state.rating}
					similar_item={this.state.similar_item}
					category={this.state.category}
					category_link={this.state.category_link}
					selection={this.state.selection}
					title={this.state.title}
				/>
				<hr id="separator" />
				<Availability
					key={this.state.selection}
					id={this.state.selection}
					price={this.state.price}
					discount={this.state.discount}
					list_price={this.state.list_price}
					shipping={this.state.shipping}
					ship_price={this.state.ship_price}
					message={this.state.message}
					banner={this.state.banner}
					shipping_message={this.state.shipping_message}
					lowstock_message={this.state.lowstock_message}
					inStock={this.state.inStock}
				/>
				<Options
					// key= { this.state.selection }
					id={this.state.selection}
				/>

				<hr id="separator" />
				<AboutList
					key={this.state.id}
					about_item={this.state.about_item}
				/>

							<Sponsored
								id={this.state.prodID}
								category={this.state.category}
								category_link={this.state.category_link}
								similar_item = {this.state.similar_item}
							/>

							<hr id="separator" />
							<Ratings 
								id = {this.props.params}
							/>
						</div>
					</Grid>
					<Grid item xs={5} className="addcart-grid">
                    	<div id="addcart-component"></div>
                	</Grid>
				</Grid>
			</div>
		);
	}
}

export default Product;
