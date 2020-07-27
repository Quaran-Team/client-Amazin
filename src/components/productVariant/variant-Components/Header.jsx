import React from 'react';

function Header() {
    return(
        <div>
            <div id="titleSection" className="a-section a-spacing-none">
                <h1 id="title" className="a-size-large a-spacing-none">
                    <span id="productTitle" className="a-size-large product-title-word-break">
                        This is the Long Item Title
                    </span>
                </h1>
            </div>
            <div id="bylineInfo_feature_div" className="celwidget">
                <div class="a-section a-spacing-none">
                    by
                </div>
                <a id="bylineInfo" className="a-link-normal" href="*">Seller Name</a>
            </div>
            <div id="averageCustomerReviews_feature_div" className="celwidget">
                <div id="averageCustomerReviews">
                    <span className="a-decalrative">
                        <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline" title="*">
                            <span className="a-declarative">
                                4 out of 5 stars
                            </span>
                            <span id="arcCustomerReviewText" className="a-size-base">ratings</span>
                        </span>
                    </span>
                </div>
            </div>
            <div id="badge-wrapper" className="celwidget">
                <a className="badge-link" href="*">
                    <i className="a-icon a-icon-addon p13n-best-seller-badge">
                        #1 Best Seller
                    </i>
                    <span className="cat-name">
                        <span className="cat-link">in Category</span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;