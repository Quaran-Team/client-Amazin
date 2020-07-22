import React, { Component } from 'react';
import QAcomponent from './QAcomponent';
import CImagesAll from './CustomerImagesAll';

class App extends Component {
    render(){
        return(
            <div>
                <QAcomponent />
                <CImagesAll />
            </div>
        )
    }
}

export default App;

