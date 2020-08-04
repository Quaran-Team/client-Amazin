import React, { Component } from 'react';
import Product from './productVariant/Product.jsx'
import CustomerReviews from './CustomerReviews/CustomerReviews';
import CWBA from './CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';
import ComparisonGrid from './ComparisonGrid/ComparisonGrid.jsx';
import CImagesAll from './CustomerImageCmpnt/CustomerImagesAll';
import Appples from './RatingSummary/Appples';

class App extends Component {
    render(){
        return(
            <div>
<<<<<<< HEAD
                <CustomerReviewsContainer />
=======
                <h1>My React App</h1>
                <Product />
                <CustomerReviews />
>>>>>>> 0d2c2b9f41c9a8da4145bafb7c1b957cd66ac2c1
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

