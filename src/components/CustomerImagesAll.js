import React, { Component } from 'react';
import CImage from "./CustomerImageIndividual"

class CImagesAll extends Component {
    render(){
        return(
            <div>
                <h2>
                    Customer Images
                </h2>
                    <CImage/>   
                <div>
                    <a>See all customer images </a>
                </div>
            </div>
        )
    }
}

export default CImagesAll;