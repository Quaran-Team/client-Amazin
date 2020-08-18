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
 //sets size of space available to the container
    _handleWindowResize () {
            this.setState({
                containerWidth: ReactDOM.findDOMNode(this._containerTarget).offsetWidth
        });}

//slices items for display
    _truncateItems (items) {
        let containerWidth = this.state.containerWidth;
        let position = this.state.position;
        let maxItemsToShow = this.maximumItemsToShow(containerWidth);
        let itemStart = position
        let truncatedItems = items.slice(itemStart, maxItemsToShow );
        return truncatedItems;
      }

//displays pagination
    _pageOf(items){
        let containerWidth = this.state.containerWidth;
        let maxItemsToShowWithOutPositioning = this.maximumItemsToShowWithOutPositioning(containerWidth)
        let numberOfRemainingPages = this.numberOfRemainingPages(maxItemsToShowWithOutPositioning)
        let pagesLeft = this.pagesLefter()
        let displayNumberHtml = (
            <p className="PageOf">
                Page {pagesLeft} of {numberOfRemainingPages}
            </p>
        );
        return displayNumberHtml
      }

//calculates the remaining pages
    numberOfRemainingPages(maxItemsToShowWithOutPositioning){
        return Math.ceil(this.state.otherIdArray.length / maxItemsToShowWithOutPositioning)
    }

//returns the pages remaining
    pagesLefter = () => {
        return this.state.pageOn
    }

    //calculates the max items to show with positioning
    maximumItemsToShow = (cW) =>{
        return Math.floor(cW / this.state.individualItemWidth) + this.state.position
    }

    //calculates the max items to show without positioning
    maximumItemsToShowWithOutPositioning= (cW) => {
        return Math.floor(cW / this.state.individualItemWidth)
    }

    refreshCourses() { 
        CustomerWhoBoughtAlsoDataService.retrieveCustomerWhoBoughtAlso(this.props.params)
            .then(
                response => {
                    this.setState({ itemId: response.data.id,
                                    otherIdArray: response.data.otherIds.split(",")
                    })
                }
            )}

    //handles on click to the right
    goRight(){
        let containerWidths = this.state.containerWidth;
        let movement = this.maximumItemsToShow(containerWidths)
        let maxItemsToShowWithOutPositioning = this.maximumItemsToShowWithOutPositioning(containerWidths)
        let pageIs = this.pageIsR(1)
        if(this.state.pageOn >= this.numberOfRemainingPages(maxItemsToShowWithOutPositioning)){
            this.setState({
                position: 0,
                pageOn: 1,
            })
        } else {
            this.setState({ 
                position: movement,
                pageOn: pageIs,
            })
        }
    }
    // increments page forward or backward
    pageIsR = (direction) => {
        return this.state.pageOn + direction
    }

    //handle on click to the left
    goLeft(){
        let containerWidths = this.state.containerWidth;
        let movement = this.state.position - this.maximumItemsToShowWithOutPositioning(containerWidths)
        let maxItemsToShowWithOutPositioning = this.maximumItemsToShowWithOutPositioning(containerWidths)
        let pageIs = this.pageIsR(-1)
        let maximumPages = this.numberOfRemainingPages(maxItemsToShowWithOutPositioning)
        console.log("NUMBER OF Total PAGES: "+maximumPages)
        console.log("NUMBER OF max items PAGES: "+maxItemsToShowWithOutPositioning)
        let maximumPagesPosition = maxItemsToShowWithOutPositioning * (maximumPages-1)+1
        if(this.state.pageOn-1 >= 1){ // sets state for moving
            this.setState({
                position: movement,
                pageOn: pageIs,
            })
        } 
        else { //handles error that was taking array out of range
            this.setState({
                position: maximumPagesPosition,
                pageOn: maximumPages,
            })
    }
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
            <div className="CWBADiv rhf-border">
                <div className="Shoveler">
                <div className="CWBAHeading">
                    <h2>
                        Popular products inspired by this item
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
                <div className="rhf-divider-no-gradient">
                </div>
                </div>
            </div>
        )
    }
}

export default CWBA;