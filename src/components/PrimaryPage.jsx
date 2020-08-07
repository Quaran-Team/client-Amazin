import React, { Component } from 'react';
import Product from './productVariant/Product.jsx';
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviews";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Grid from "@material-ui/core/Grid";
import './primarypage.css'

class PrimaryPage extends Component {


    render(){
        return(
            <div className="app">
                <Grid>
                    <Grid item xs={6} className="mainpage-grid photogallery-grid" id="photogallery-grid">
                        <PhotoGallery />
                    <div id="PurchaseItemContainer_Placeholder">
					{/*place holder: replace when ready*/}
				</div>
                    </Grid>
                    <Grid item xs={6} className="mainpage-grid productvariant-grid" id="productvariant-grid">
                <Product
                    key={this.props.match.params.id}
                    params={this.props.match.params.id}
                />  
                </Grid>
                <br/>
                <Grid>
				    <ComparisonGrid />
                </Grid>
                <Grid className="mainpage-grid qa-grid">
				    <QAcomponent />
                </Grid >
                <Grid style={{width: "100vw"}} className="mainpage-grid customerReview-grid">
				    <CustomerReviewsContainer />
                </Grid>
                <Grid>
				    <CImagesAll />
                </Grid>
                <Grid>
				    <CWBA />
                </Grid>
				    <Appples /> 
                </Grid>
            </div>
        )
    }
}

export default PrimaryPage;