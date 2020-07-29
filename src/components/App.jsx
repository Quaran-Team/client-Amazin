import React, { Component } from 'react';
import Product from './productVariant/Product.jsx'
import CustomerReviewsContainer from './CustomerReviews/CustomerReviewsContainer';
import CWBA from './CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';
import ComparisonGrid from './ComparisonGrid/ComparisonGrid.jsx';
import CImagesAll from './CustomerImageCmpnt/CustomerImagesAll';
import Appples from './RatingSummary/Appples';

class App extends Component {
    render(){
        return(
            <div>
                <h1>My React App</h1>
                <Product />
                <CustomerReviewsContainer />
                <QAcomponent />
                <ComparisonGrid/>
                <CImagesAll />
                <CWBA/>
                <Appples/>
            </div>
        )
    }
}

export default App;

