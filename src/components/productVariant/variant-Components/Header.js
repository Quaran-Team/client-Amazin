import React from 'react';

function Header() {
    return(
        <div>
            <h1>Item Title</h1>
            <h4>by <span className="seller">Subtitle</span></h4>
            <p><div className="stars-chart">stars bar</div><dropdown></dropdown><div className="ratings">ratings</div></p>
            <p><div className="ticket-logo">Tag ticket</div><div>for "<span className="item-name">in category</span>"</div></p>
        </div>
    )
}

export default Header;