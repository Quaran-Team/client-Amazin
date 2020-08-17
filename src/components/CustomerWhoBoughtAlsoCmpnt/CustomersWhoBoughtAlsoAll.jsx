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
        position: 0,
        individualItemWidth: 173,
        pageOn: 1,
        pagesRemaining: 2
        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this._handleWindowResize = this._handleWindowResize.bind(this)
        this._pageOf = this._pageOf.bind(this)
        this.goRight = this.goRight.bind(this)
        this.goLeft = this.goLeft.bind(this)
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
        // if(this._isMounted){
            this.setState({
                containerWidth: ReactDOM.findDOMNode(this._containerTarget).offsetWidth
            // 
        });}

    _truncateItems (items) {
        let containerWidth = this.state.containerWidth;
        let position = this.state.position;
        let maxItemsToShow = this.maximumItemsToShow(containerWidth);
        let itemStart = position
        let truncatedItems = items.slice(itemStart, maxItemsToShow );
        return truncatedItems;
      }

    _pageOf(items){
        let containerWidth = this.state.containerWidth;
        // let maxItemsToShow = this.maximumItemsToShow(containerWidth);
        let maxItemsToShowWithOutPositioning = this.maximumItemsToShowWithOutPositioning(containerWidth)
        // let numberOfRemainingItems = this.numberOfRemainingItems(this.state.otherIdArray, maxItemsToShow)
        let numberOfRemainingPages = Math.ceil(this.state.otherIdArray.length / maxItemsToShowWithOutPositioning)
        let pagesLeft = this.pagesLefter()
        let displayNumberHtml = (
            <p className="PageOf">
                Page {pagesLeft} of {numberOfRemainingPages}
            </p>
        );
        return displayNumberHtml
      }

    pagesLefter = () => {
        return this.state.pageOn
    }
      
    itemArea = (whereAlreadyAt)=>{
        let whereEndUp = whereAlreadyAt
        return whereEndUp
    }

    maximumItemsToShow = (cW) =>{
        return Math.floor(cW / this.state.individualItemWidth) + this.state.position
    }
    maximumItemsToShowWithOutPositioning= (cW) => {
        return Math.floor(cW / this.state.individualItemWidth)
    }

    numberOfRemainingItems = (items, maxItemsToShow) => {
        return Math.ceil(items.length / (maxItemsToShow ))
    }

    refreshCourses() { 
        CustomerWhoBoughtAlsoDataService.retrieveCustomerWhoBoughtAlso(1)
            .then(
                response => {
                    this.setState({ itemId: response.data.id,
                                    otherIdArray: response.data.otherIds.split(",")
                    })
                }
            )}

    goRight(){
        let containerWidths = this.state.containerWidth;
        let movement = 0 + this.maximumItemsToShow(containerWidths)
        let pageIs = this.pageIsR()
        this.setState({ 
            position: movement,
            pageOn: pageIs,
        })
    }

    pageIsR = () => {
        return 1+this.state.pageOn
    }


    goLeft(){
        if(this.state.pageOn == 1){
            this.setState({
                position: 0,
                pageOn: 1,
            })
        }
        if(this.state.pageOn-1 >= 1){
            let containerWidths = this.state.containerWidth;
            let movement = 0 - this.maximumItemsToShow(containerWidths)
            let pageIs = this.pageIsL()
            console.log(movement)
            this.setState({
                position: movement,
                pageOn: pageIs,
            })
        } 
        else {
            console.log("you cant go more left")
            this.setState({
                position: 0,
                pageOn: 1,
            })
    }
    }
    pageIsL = () => {
        return this.state.pageOn-1
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