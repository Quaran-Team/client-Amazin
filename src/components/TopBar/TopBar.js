import React, { Component } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Flag from "./Flag";
import SignIn from "./SignIn";
import Returns from "./Returns";
import Prime from "./Prime";
import Cart from "./Cart";
import WorkinMenu from "./WorkinMenu";
import "./topbar.css";

export default class TopBar extends Component {
	render() {
		return (
			<div className="topbar">
				<WorkinMenu />
				{/* <Menu/> */}
				<Logo />
				<SearchBar />
				<Flag />
				<SignIn />
				<Returns />
				<Prime />
				<Cart />
				<div className="paddinnn"></div>
			</div>
		);
	}
}
