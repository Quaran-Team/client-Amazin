import React, { Component } from 'react';
import CustomerWhoBoughtAlsoDataService from '../../service/CustomerWhoBoughtAlsoDataService'
import  './CWBA.css';
class CWBAIndividual extends Component {

    constructor(props) {
        super(props)
            this.state = {
            response: null,
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }
    
    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() { //retrieve data currently set to one id. not dynamic
        CustomerWhoBoughtAlsoDataService.retrieveCustomerWhoBoughtAlso(1)
            .then(
                response => {
                    this.setState({ response: response.data })
                }
            )
    }

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