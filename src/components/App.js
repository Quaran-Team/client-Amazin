import React, { Component } from 'react';
import CWBA from './CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';
import ComparisonGrid from './ComparisonGrid';

class App extends Component {
    render(){
        return(
            <div>
                <h1>My React App</h1>
                <CWBA/>
                <QAcomponent />
                <ComparisonGrid/>
            </div>
        )
    }
}

export default App;

