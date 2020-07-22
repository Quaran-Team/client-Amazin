import React, { Component } from 'react';
import CWBAIndividual from './CustomerWhoBoughtAlsoIndividual'

class CWBA extends Component {
    render(){
        return(
            <div>
                <h2>
                    Customers who bought also...
                </h2>
                <h5>
                    Page X of Y
                </h5>
                <button>Left</button>
                <div>
                    <CWBAIndividual/>
                </div>
                <button>Right</button>
            </div>
        )
    }
}

export default CWBA;