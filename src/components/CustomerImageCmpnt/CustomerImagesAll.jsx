import React, { Component } from 'react';
import CImage from "./CustomerImageIndividual"
import  '../CustomerWhoBoughtAlsoCmpnt/CWBA.css';
import CustomerImageDataService from '../../service/CustomerImageDataService'

class CImagesAll extends Component {
    constructor(props) {
        super(props)
            this.state = {
            imageArray: [],
            itemId: null,
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }
    
    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() { //retrieve data currently set to one id. not dynamic
        CustomerImageDataService.retrieveAllCustomerImages()
            .then(
                response => {
                    this.setState({ itemId: response.data[0].id })
                    this.setState({imageArray: response.data[0].imageLinks.split(',')})
                    console.log("oi")
                }
            )}
    
    

    render(){

        const listImageArray = this.state.imageArray.map((item)=>
                <CImage
                    key={item}
                    url={item}
                    associatedItem={this.state.itemId}
                />
        );


        return(
            <div>
                <h3>
                    Customer Images
                </h3>
                <div className="imageArrayList">{listImageArray}</div>
                <div>
                    <a>See all customer images </a>
                </div>
            </div>
        )
    }
}

export default CImagesAll;