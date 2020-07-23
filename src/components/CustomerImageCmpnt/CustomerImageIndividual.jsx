import React, { Component } from 'react';
import CustomerImageDataService from '../../service/CustomerImageDataService'



class CImage extends Component {

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
        CustomerImageDataService.retrieveCustomerImage(1)
            .then(
                response => {
                    this.setState({ response: response.data })
                }
            )
    }

    render(){
        return(
            <div>
                <img src="" alt="picture will go here"></img>
            </div>
        )
    }
}

export default CImage;