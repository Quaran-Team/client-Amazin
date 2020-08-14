import React, { Component } from "react";
import Product from "./productVariant/Product.jsx";
import CustomerReviewsContainer from "./CustomerReviews/CustomerReviews";
import CWBA from "./CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll";
import QAcomponent from "./QAcomponent";
import ComparisonGrid from "./ComparisonGrid/ComparisonGrid.jsx";
import CImagesAll from "./CustomerImageCmpnt/CustomerImagesAll";
import Appples from "./RatingSummary/Appples";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import TopBar from "./TopBar/TopBar";
import BlueSecondTopLine from "./SecondTopLine/BlueSecondTopline";
import Footer from "./Footer/Footer";

// import "../Css/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <TopBar />
        </div>
        <BlueSecondTopLine />

        <PhotoGallery />
        <div id="PurchaseItemContainer_Placeholder">
          {/*place holder: replace when ready*/}
        </div>
        <CustomerReviewsContainer />
        <QAcomponent />
        <ComparisonGrid />
        <CImagesAll />
        <CWBA />
        <Appples />
        <Footer />
      </div>
    );
  }
}

export default App;
