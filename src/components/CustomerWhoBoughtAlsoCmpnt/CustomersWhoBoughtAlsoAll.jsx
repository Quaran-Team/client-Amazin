import React, { Component } from 'react';
import CWBAIndividual from './CustomerWhoBoughtAlsoIndividual'
import CustomerWhoBoughtAlsoDataService from '../../service/CustomerWhoBoughtAlsoDataService'
import ReactDOM from "react-dom";

import  './CWBA.css';


class CWBA extends Component {
    constructor(props) {
        super(props)
            this.state = {
            otherIdArray: [],
            itemId: null,
            containerWidth: 0,
            
        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this._handleWindowResize = this._handleWindowResize.bind(this)
        this._pageOf = this._pageOf.bind(this)
        this._isMounted = false;
    }
    
    componentDidMount() {
        this._isMounted = true;
        this.refreshCourses();
        window.addEventListener('resize', this._handleWindowResize);
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('resize', this._handleWindowResize);
    }

	_handleWindowResize () {
		// if (this._isMounted) {
			this.setState({
				containerWidth: ReactDOM.findDOMNode(this._containerTarget).offsetWidth
			});
		// }
	}

    _truncateItems (items) {
        var containerWidth = this.state.containerWidth;
        var maxItemsToShow = Math.floor(containerWidth / 173);
        var truncatedItems = items.slice(0, maxItemsToShow );
        return truncatedItems;
      }

      _pageOf(items){
        var containerWidth = this.state.containerWidth;
        var maxItemsToShow = Math.floor(containerWidth / 173);
        var numberOfRemainingItems = Math.ceil(items.length / (maxItemsToShow ));
        var pagesLeft = "Page X of "
        var displayNumberHtml = (
            <p className="PageOf">
                {pagesLeft}{numberOfRemainingItems}
            </p>
        );
        return displayNumberHtml
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

    goRight(){
        console.log("go right")
    }
    goLeft(){
        console.log("go left")
    }

    render(){
        const items = this.state.otherIdArray.map((otherItems)=>
                <CWBAIndividual
                    className= '-item'
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
                    {this._pageOf(items)}
                </div>
                <div className="CWBAPagination">
                    <button className="leftButton button" onClick={this.goLeft}>Left</button>
                    <div className="CWBASet -items"
                        ref={node => {
                            // this callback executes before componentDidMount
                            if (node !== null) {
                            this._containerTarget = node;
                            if (!this._isMounted) {
                                this._isMounted = true;
                                this._handleWindowResize();
                            }
                            }
                        }}
                    >
                            {this._truncateItems(items)}
                    </div>
                    <button className="rightButton button" onClick={this.goRight}>Right</button>
                </div>

            </div>
        )
    }
}

export default CWBA;