import React, { Component } from "react";
import Header from "./variant-Components/Header";
import Availability from "./variant-Components/Availability.jsx";
import Details from "./variant-Components/Details.jsx";
import Sponsored from "./variant-Components/Sponsored.jsx";
import "./product.css";
import Ratings from "./variant-Components/Ratings";
import Axios from "axios";
import AboutList from "./variant-Components/AboutList";
import { Dropdown } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
//import PhotoGallery from "../PhotoGallery/PhotoGallery";

class Product extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		console.log(this.myRef);
	}

	state = {
		dropmenu: "drop",
		menuitem: "top",
		prodID: "",
		seller: "",
		user_rating: "",
		tag: "",
		tag_title: "",
		similar_item: "",
		rating: "",
		category: "",
		category_link: "",
		optionDropdown: [],
		optionImage: [],
		optionCustomBtn: [],
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
		type_title: "",
		type: [],
		selection: 0,
		height: 0,
	};

	componentDidMount() {
		this.loadItem(this.props.params);
	}

	loadItem = (params) => {
		//calls the product by id
		Axios({
			method: "GET",
			url: `http://localhost:8080/variant/product/${params}`,
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
			//the default options have been separated out into this function which goes through how everything is
			//displayed after selecting default options.
			this.optionLogic(trueSelections);
			//catches the id of the selection
			this.setState({
				options: trueSelections,
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
				type_title: defaultTrueSelection[0].type_title,
			});
		});
	};

	optionLogic = (options) => {
		//function global variables initialized
		let dropdownOption = [];
		let imageOption = [];
		let custombtnOption = [];

		//this goes through the options and sorts them based on the type.
		//in the future this would be more useful if there were multiple options available ie. images and dropdown selections
		options.map((option) => {
			switch (option.type_selector) {
				case 1:
					dropdownOption.push(option);
					break;
				case 2:
					imageOption.push(option);
					break;
				case 3:
					custombtnOption.push(option);
					break;
				default:
					console.log("No options found");
			}
		});

		if (dropdownOption.length > 0) {
			this.setState({
				optionDropdown: dropdownOption,
			});
		}
		if (imageOption.length > 0) {
			this.setState({
				optionImage: imageOption,
			});
		}
		if (custombtnOption.length > 0) {
			this.setState({
				optionCustomBtn: custombtnOption,
			});
		}
	};

	dropdownOption = () => {
		if (this.state.optionDropdown.length > 0) {
			return (
				<Dropdown id="dropdown-container">
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						{this.state.optionDropdown[0].type_title}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{this.state.optionDropdown.map((option) => (
							<Dropdown.Item
								key={option.id}
								id={option.id}
								onClick={() => this.changeOption(option.id)}
							>
								<div>{option.selector_text}</div>
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
			);
		}
	};

	custombtnOption = () => {
		if (this.state.optionCustomBtn.length > 0) {
			return (
				<div>
					<div className="heading" id="custbtn-container">
						{this.state.optionCustomBtn[0].type_title}:
					</div>
					{this.state.optionCustomBtn.map((option) => (
						<div
							className="small-div-btn"
							onClick={() => this.changeOption(option.id)}
						>
							{" "}
							<button id="custbtn-btn">
								{option.selector_text}{" "}
							</button>{" "}
						</div>
					))}
				</div>
			);
		}
	};

	imageOption = () => {
		if (this.state.optionImage.length > 0) {
			return (
				<div>
					<div className="heading image-container">
						{this.state.optionImage[0].type_title}:
					</div>
					{this.state.optionImage.map((option) => (
						<div className="small-div-btn">
							<div className="heading">
								{option.selector_text}
							</div>{" "}
							<img
								id="image-option-variant"
								src={option.selector_img}
								alt={option.selector_text}
								onClick={() => this.changeOption(option.id)}
							/>{" "}
						</div>
					))}
				</div>
			);
		}
	};

	changeOption = (newID) => {
		this.state.options.map((userpick) => {
			if (userpick.id == newID) {
				this.setState({
					selection: userpick.id,
					title: userpick.title,
					about_item: userpick.about_item,
					discount: userpick.discount,
					list_price: userpick.list_price,
					shipping: userpick.shipping,
					ship_price: userpick.ship_price,
					type_selector: userpick.type_selector,
					selector_img: userpick.selector_img,
					selector_text: userpick.selector_text,
					inStock: userpick.inStock,
					message: userpick.message,
					price: userpick.price,
					lowstock_message: userpick.lowstock_message,
					shipping_message: userpick.shipping_message,
					type_title: userpick.type_title,
				});
			}
		});
	};

	render() {
		return (
			<div>
				<Grid item xs={12}>
					<Grid item xs={7} className="productVariant-grid">
						<div className="productVariant">
							<Header
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
							<br />
							<hr id="separator" />
							<Availability
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
							<div className="options">
								<div className="container dropmenu">
									{this.dropdownOption()}
								</div>
								<div className="container image">
									{this.imageOption()}
								</div>
								<div className="container custom">
									{this.custombtnOption()}
								</div>
							</div>
							<br />
							<Details id={this.state.selection} />
							<br />
							<hr id="separator" />
							<AboutList about_item={this.state.about_item} />

							<Sponsored
								id={this.state.prodID}
								category={this.state.category}
								category_link={this.state.category_link}
								similar_item={this.state.similar_item}
							/>

							<hr id="separator" />
							<h3>
								<strong>Customer ratings by feature</strong>
							</h3>
							<Ratings
								key={this.props.params}
								id={this.props.params}
							/>
						</div>
						<hr />
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
