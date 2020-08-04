import React, { Component } from 'react';
import Product from './productVariant/Product.jsx';


class PrimaryPage extends Component {


    render(){
        return(
            <div>
                <Product
                    key={this.props.match.params.id}
                    params={this.props.match.params.id}
                />
            </div>
        )
    }
}

export default PrimaryPage;