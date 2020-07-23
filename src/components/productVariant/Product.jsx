import React from 'react'; 
import Header from './variant-Components/Header.jsx';
import Availability from './variant-Components/Availability.jsx';
import Options from './variant-Components/Options.jsx'; 
import Sponsered from './variant-Components/Sponsered.jsx';
import './product.css'
// import Hello from './variant-Components/hello'

function Product() {
    return(
        <div className="productVariant">
            <Header />
            {/* <Hello /> */}
            <hr />
            <Availability />
            <Options />
            <hr/>
            <Sponsered />
        </div>
    )
}

export default Product;