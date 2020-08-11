import React from 'react'; 

function Sponsored(props) {
    return(
            <a href={props.category_link}>
                <div id="hero-quick-promo" className="a-row a-spacing-medium">
                    <img id="promo-image" src={props.similar_item} alt={props.category}/>
                </div>
                <span id="sponsered-logo">
                    Sponsored <b id="ad-feedback-sprite-hero-quick-promo"></b>
                </span>
            </a>
    )
}

export default Sponsored;