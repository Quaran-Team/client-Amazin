import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.jsx";
import React, { Component } from "react";
import PrimaryPage from "./PrimaryPage";

class Directory extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/singleItem/:id" component={PrimaryPage} />
        </Switch>
      </Router>
    );
  }
}

export default Directory;
