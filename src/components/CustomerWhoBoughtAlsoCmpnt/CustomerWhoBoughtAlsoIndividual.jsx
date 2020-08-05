import React, { Component } from 'react';
import CustomerWhoBoughtAlsoDataService from '../../service/CustomerWhoBoughtAlsoDataService'
import  './CWBA.css';
class CWBAIndividual extends Component {


    render(){
        return(
            <div className="individualCWBA">
                <img src="" 
                    // alt="test"
                    style={{
                        height: "153px", 
                        width: "153px", 
                        backgroundColor: "grey"
                        }}> 
                        {/* {this.props.associatedItem} */}
                </img>
                <div>
                    <a href="Link to other product">
                        Name of product
                    </a>
                </div>
                <div className="starSection">
                    Stars***** 18,742
                </div>
                <div className="priceAnd">
                    $Price and Prime Check
                </div>
            </div>
        )
    }
}

export default CWBAIndividual;