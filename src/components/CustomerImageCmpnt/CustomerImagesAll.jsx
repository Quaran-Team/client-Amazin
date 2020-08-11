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
    
    refreshCourses() { 
        CustomerImageDataService.retrieveCustomerImage(1)
            .then(
                response => {
                    this.setState({ itemId: response.data.id,
                                    imageArray: response.data.imageLinks.split(',')
                    })
                }
            )}
    render(){
        const listImageArray = this.state.imageArray.slice(0, 4).map((item)=>
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