import React from 'react'; 

function Options(props) {
    console.log("YOU ARE IN OPTIONS")
    console.log(props)
    return(
        <div>
            <div id="twister-container" className="addTwisterMargin">
                <form id="twister" action="/" method="post" className="a-section a-spacing-small">
                    This is a form. All options are inserted here.
                </form>
            </div>
                {/* {props.title} */}
        </div>
    )
}

export default Options;