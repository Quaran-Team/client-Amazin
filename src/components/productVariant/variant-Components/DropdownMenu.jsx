import React from 'react'; 
import { Dropdown, DropdownButton } from 'react-bootstrap'

function DropdownMenu(props) {
    console.log("data passed to dropdown")
    console.log(props)
    return(
        <div>
            {props.id}
        </div>
    )
}
export default DropdownMenu;