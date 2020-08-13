import React, { Component } from 'react';
import  './CWBA.css';
import DynamicStarSpecial from "../RatingSummary/dynamicStarForCWBA";
class CWBAIndividual extends Component {
    constructor(props) {
        super(props)
        this.state = {
        associatedItem: this.props.associatedItem
        }   
    }

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
                    <DynamicStarSpecial 
                        key={this.props.associatedItem}
                        associatedItem={this.props.associatedItem}
                    />
                </div>
                <div className="priceAnd">
                    $Price and Prime Check
                </div>
            </div>
        )
    }
}

export default CWBAIndividual;