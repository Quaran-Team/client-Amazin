import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class ReviewMentions extends Component {
    constructor(props) {
        super(props)
        this.state = { value: "top reviews"}
    

    this.handleClick = this.handleClick.bind(this);

}
    handleClick(e) {
        this.setState({ value: e.target.value })
        
        console.log("The link was clicked");
    }


    render() { 

        return ( 
            <div>
                <h3>Read reviews that mention</h3>
                <br />
                <Button onClick={this.handleClick}>
                    top reviews
                </Button>   
            </div>
         );
    }
}
 
export default ReviewMentions;