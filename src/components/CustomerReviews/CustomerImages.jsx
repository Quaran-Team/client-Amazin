import React, { Component } from 'react';
import CImagesAll from '../CustomerImageCmpnt/CustomerImagesAll';

class CustomerImages extends Component {
    
    render() { 
        return ( 
            <div>
                <CImagesAll 
                    key={this.props.params}
                    params={this.props.params}
                />
            </div>
         );
    }
}
 
export default CustomerImages;