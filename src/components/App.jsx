import React, { Component } from 'react';
import Product from './productVariant/Product.jsx'
<<<<<<< HEAD
import CustomerReviewsContainer from './customerReviews/CustomerReviewsContainer';
import CWBA from './CustomersWhoBoughtAlsoAll'
=======
import CustomerReviewsContainer from './CustomerReviewsContainer';
import CWBA from './CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll'
>>>>>>> a9a8c07dd731fb762f2a1fe0de8ef8cabd9f9875
import QAcomponent from './QAcomponent';
import ComparisonGrid from './ComparisonGrid/ComparisonGrid.jsx';
import CImagesAll from './CustomerImageCmpnt/CustomerImagesAll';
import Appples from './RatingSummary/Appples';

class App extends Component {
    render(){
        return(
            <div>
                <h1>My React App</h1>
<<<<<<< HEAD
                {/* <Product />
                <CWBA/> */}
                <CustomerReviewsContainer />
                {/* <QAcomponent />
                <CImagesAll /> */}
=======
                <Product />
                <CustomerReviewsContainer />
                <QAcomponent />
                <ComparisonGrid/>
                <CImagesAll />
                <CWBA/>
                <Appples/>
>>>>>>> a9a8c07dd731fb762f2a1fe0de8ef8cabd9f9875
            </div>
        )
    }
}

export default App;

