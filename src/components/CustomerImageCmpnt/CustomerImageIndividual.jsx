import React, { Component } from 'react';

class CImage extends Component {

    render(){
        return(

                <img src={this.props.url} 
                    alt="customer provided image"
                    className="CImage"
                    style={{

                        }}>
                </img>

        )
    }
}

export default CImage;