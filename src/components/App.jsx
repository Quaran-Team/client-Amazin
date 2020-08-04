import React, { Component } from 'react';
import CustomerReviewsContainer from './CustomerReviews/CustomerReviews';
import CWBA from './CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';
import ComparisonGrid from './ComparisonGrid/ComparisonGrid.jsx';
import CImagesAll from './CustomerImageCmpnt/CustomerImagesAll';
import Appples from './RatingSummary/Appples';

class App extends Component {
    render(){
        return(
            <div>
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

