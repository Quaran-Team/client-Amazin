import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import App from './App.jsx';
import React, { Component } from 'react';
import FrontPage from './FrontPage'
import Product from "./productVariant/Product.jsx";

class Directory extends Component {
    render(){
        return(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/list" component={FrontPage} />
                <Route path="/singleItem/:id" component={App} />
                <Route path="/variant/:id" component={Product} />
            </Switch>
        </Router>
        )
    }
}

export default Directory;
