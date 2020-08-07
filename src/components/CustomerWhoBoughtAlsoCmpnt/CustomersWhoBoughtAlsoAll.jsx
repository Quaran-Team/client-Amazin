import React, { Component } from 'react';
import CWBAIndividual from './CustomerWhoBoughtAlsoIndividual'
import CustomerWhoBoughtAlsoDataService from '../../service/CustomerWhoBoughtAlsoDataService'

import  './CWBA.css';


class CWBA extends Component {
    constructor(props) {
        super(props)
            this.state = {
            otherIdArray: [],
            itemId: null,
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }
    
    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() { //retrieve data currently set to one id. not dynamic
        CustomerWhoBoughtAlsoDataService.retrieveAllCustomerWhoBoughtAlsos()
            .then(
                response => {
                    this.setState({ itemId: response.data[0].id,
                                    otherIdArray: response.data[0].otherIds.split(",")
                    })
                }
            )}
    render(){
        const listOtherIdArray = this.state.otherIdArray.map((otherItems)=>
                <CWBAIndividual
                    key={otherItems}
                    associatedItem={otherItems}
                />
        )
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
                    <button className="leftButton button">Left</button>
                    <div className="CWBASet">
                        {listOtherIdArray}
                    </div>
                    <button className="rightButton button">Right</button>
                </div>
            </div>
        )
    }
}

export default CWBA;