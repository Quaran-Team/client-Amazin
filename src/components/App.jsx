import React, { Component } from 'react';
import Product from './productVariant/Product.jsx'
import CustomerReviewsContainer from './customerReviews/CustomerReviewsContainer';
import CWBA from './CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';

class App extends Component {
    render(){
        return(
            <div>
                <h1>My React App</h1>
                {/* <Product />
                <CWBA/> */}
                <CustomerReviewsContainer />
                {/* <QAcomponent /> */}
            </div>
        )
    }
}

export default App;

