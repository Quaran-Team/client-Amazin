import React, {Component} from 'react'; 
import Header from './variant-Components/Header.jsx';
import Availability from './variant-Components/Availability.jsx';
import Options from './variant-Components/Options.jsx'; 
import Sponsered from './variant-Components/Sponsered.jsx';
import './product.css'
import Ratings from "./variant-Components/Ratings";

class Product extends Component {
    state = {
        selections: [],
        features:[]
    }

    // componentDidMount() {
    //     this.loadSelections();
    //     this.loadFeatures();
    // }

    render(){
    return(
        <div className="productVariant">
            <Header />
            <hr id="separator" />
            <Availability />
            <Options />
            <hr id="separator" />
            <Sponsered />
            <hr id="separator" />
            <Ratings />
        </div>
    )
    }
}

export default Product;