import React from 'react'; 
import Header from './variant-Components/Header';
import Availability from './variant-Components/Availability';
import Options from './variant-Components/Options'; 
import Sponsered from './variant-Components/Sponsered';
import './product.css'

function Product() {
    return(
        <div>
            <Header />
            <hr />
            <Availability />
            <Options />
            <hr/>
            <Sponsered />
        </div>
    )
}

export default Product;