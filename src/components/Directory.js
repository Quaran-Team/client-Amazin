import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.jsx";
import React, { Component } from "react";
import PrimaryPage from "./PrimaryPage";
import UnderConstruction from "./ExtraPages.jsx/UnderConstruction.jsx";

class Directory extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/singleItem/:id" component={PrimaryPage} />
					<Route path="/ninja_stuff" component={UnderConstruction} />
					<Route path="/microwave_stuff" component={UnderConstruction}/>
				</Switch>
			</Router>
		);
	}
}

export default Directory;
