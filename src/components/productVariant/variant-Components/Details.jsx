import React, { Component } from 'react'; 
import Axios from 'axios';

class Details extends Component {
    //get id from selection to import correct details based on selection
    constructor(props){
        super(props)
    }

    state = {
        detail_state: []
    }

    //mount detail loader
    componentDidMount() {
        this.loadDetails();
    }

    //load all details
       loadDetails = () => {
        //calls the all of the details
        Axios({
            method: 'GET', 
            url: `http://localhost:8080/variant/detail`
        }).then (res => { 
            this.setState({ 
                detail_state : res.data
            })
        })
    }


    tableDetailLogic= (id) => {
        //filter through details for the correct "selection ID," not product ID
        const filterDetails = this.state.detail_state.filter( detail => detail.selectorID === id)
        //send table with updated values to be rendered
        return(
            <table className="detail-table">
<<<<<<< HEAD
                <tbody>
=======
>>>>>>> 39a83f45d06142a05c4d1b8bc3ffa67a9d5da434
                {filterDetails.map( detail => {
                    return (
                    <tr key={detail.id}>
                        <td>
                            <strong>
                                {detail.feature}
                            </strong>
                        </td>
                        <td>
                            {detail.detail}
                        </td>
                    </tr>
                    )
                })}
<<<<<<< HEAD
                </tbody>
=======
>>>>>>> 39a83f45d06142a05c4d1b8bc3ffa67a9d5da434
            </table>
        )

    }

render() {
    return(
        <div>
            {this.tableDetailLogic(this.props.id)}
        </div>
    )}
}

export default Details;