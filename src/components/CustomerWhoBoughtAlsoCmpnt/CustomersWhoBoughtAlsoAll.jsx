import React, { Component } from 'react';
import CWBAIndividual from './CustomerWhoBoughtAlsoIndividual'
import  './CWBA.css';


class CWBA extends Component {
    render(){
        return(
            <div>
                <div className="CWBAHeading">
                    <h2>
                        Customers who bought also...
                    </h2>
                    <p className="PageOf">
                        Page X of Y
                    </p>
                </div>
                <div className="CWBAPagination">
                    <button>Left</button>
                    <div className="CWBASet">
                        <CWBAIndividual/>
                    </div>
                    <button>Right</button>
                </div>
            </div>
        )
    }
}

export default CWBA;