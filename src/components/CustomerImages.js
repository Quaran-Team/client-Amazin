import React, { Component } from 'react';

class CustomerImages extends Component {
    
    // constructor() {
    //     super();
    //     this.state = {
    //         loaded: false
    //     }
    // }

    // handleImageLoaded() {
    //     this.setState({ loaded: true })
    // }

    render() { 
        return ( 
            <div>
                <h3>Customer Images</h3>
                <div><img src="http://placehold.it/150x150" /></div>

            </div>
         );
    }
}
 
export default CustomerImages;