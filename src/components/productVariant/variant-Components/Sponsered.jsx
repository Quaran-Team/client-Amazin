import React from 'react'; 

function Sponsered(props) {
    const sponseredBadge = "./images/" + props.category; 
    return(
        <div>
            <a href="*">
                <div id="hero-quick-promo" className="a-row a-spacing-medium">
                    <img id="promo-image" src={sponseredBadge} alt={props.category}/>
                </div>
                <span id="sponsered-logo">
                    <b id="ad-feedback-sprite-hero-quick-promo"></b>
                </span>
            </a>
        </div>
    )
}

export default Sponsered;