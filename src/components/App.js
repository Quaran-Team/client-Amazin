import React, { Component } from 'react';
import CustomerReviewsContainer from './CustomerReviews/CustomerReviewsContainer';
import CWBA from './CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';

class App extends Component {
    render(){
        return(
            <div>
                <CustomerReviewsContainer />
                <h1>My React App</h1>
                <CWBA/>
                <QAcomponent />
            </div>
        )
    }
}

export default App;

