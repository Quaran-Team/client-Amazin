import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import App from './App.jsx';


function Directory(){
    return (
        <Router>
            {/* <Route exact path="/" component={ OpeningPage } /> */}
            <Switch>
                <Route exact path="/singleItem/:id" component={App} />
            </Switch>
        </Router>
    )
}