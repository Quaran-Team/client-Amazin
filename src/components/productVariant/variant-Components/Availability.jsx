import React from 'react'; 

function Availability() {
    return(
        <div>
            <p>Available from <a href="/">these sellers.</a></p>
            <p>List Price:<span className="list-price"></span></p>
            <p>Price: <span className="cost"></span>+<span className="shipping">shipping</span></p>
            <p>You Save:<span className="you-save"></span></p>
        </div>
    )
}

export default Availability;