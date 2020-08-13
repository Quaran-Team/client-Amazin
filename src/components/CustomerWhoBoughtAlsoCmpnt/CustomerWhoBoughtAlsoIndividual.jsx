import React, { Component } from 'react';
import  './CWBA.css';
import GoodStar from "../RatingSummary/goodStar";
class CWBAIndividual extends Component {


    render(){
        return(
            <div className="individualCWBA">
                <img src="" 
                    style={{
                        height: "153px", 
                        width: "153px", 
                        backgroundColor: "grey"
                        }}> 
                </img>
                <div>
                    <a href="Link to other product">
                        Name of product
                    </a>
                </div>
                <div className="starSection">
                    <GoodStar />
                </div>
                <div className="priceAnd">
                    $Price and Prime Check
                </div>
            </div>
        )
    }
}

export default CWBAIndividual;