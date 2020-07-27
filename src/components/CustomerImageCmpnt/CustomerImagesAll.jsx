import React, { Component } from 'react';
import CImage from "./CustomerImageIndividual"
import  '../CustomerWhoBoughtAlsoCmpnt/CWBA.css';

class CImagesAll extends Component {
    render(){
        return(
            <div>
                <h3>
                    Customer Images
                </h3>
                    <CImage/>   
                <div>
                    <a>See all customer images </a>
                </div>
            </div>
        )
    }
}

export default CImagesAll;