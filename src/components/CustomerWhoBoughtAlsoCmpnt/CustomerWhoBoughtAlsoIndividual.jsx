import React, { Component } from 'react';
import CustomerWhoBoughtAlsoDataService from '../../service/CustomerWhoBoughtAlsoDataService'
import  './CWBA.css';
class CWBAIndividual extends Component {



    render(){
        return(
            <div>
                <img src="" 
                    // alt="test"
                    style={{
                        height: "153px", 
                        width: "153px", 
                        backgroundColor: "grey"
                        }}>
                </img>
                <div>
                    <a href="Link to other product">Name of product</a>
                </div>
                <div className="starSection">
                    Stars***** 18,742
                </div>
                <div className="priceAnd">
                    $Price and Prime Checkmark
                </div>
            </div>
        )
    }
}

export default CWBAIndividual;