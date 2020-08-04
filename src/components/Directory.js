import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import App from './App.jsx';
import React, { Component } from 'react';
<<<<<<< HEAD
import PrimaryPage from './PrimaryPage';
import Product from "./productVariant/Product.jsx";
=======
import FrontPage from './FrontPage'
import Product from "./productVariant/Product.jsx";
// import CustomerReviewsContainer from './CustomerReviewsContainer';
// import Product from './productVariant/Product.jsx'
// import CustomerReviews from './CustomerReviews';

// import CWBA from './CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll'
// import QAcomponent from './QAcomponent';
// import ComparisonGrid from './ComparisonGrid';
// import CImagesAll from './CustomerImageCmpnt/CustomerImagesAll';
>>>>>>> 0d2c2b9f41c9a8da4145bafb7c1b957cd66ac2c1

class Directory extends Component {
    render(){
        return(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
<<<<<<< HEAD
                <Route path="/singleItem/:id" component={PrimaryPage} />
=======
                <Route path="/list" component={FrontPage} />
                <Route path="/singleItem/:id" component={App} />
>>>>>>> 0d2c2b9f41c9a8da4145bafb7c1b957cd66ac2c1
                <Route path="/variant/:id" component={Product} />
            </Switch>
        </Router>
        )
    }
}

export default Directory;
