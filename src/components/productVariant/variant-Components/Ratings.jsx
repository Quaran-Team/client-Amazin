import React, { Component } from 'react'; 
import Axios from 'axios';

class Ratings extends Component{
  constructor(props){
      super(props)
  }
    state= {
        features: []
    }

    componentDidMount() {
        this.loadFeatures();
    }

    //load all details
    loadFeatures = () => {
        //calls the all of the details
        Axios({
            method: 'GET', 
            url: `http://localhost:8080/variant/feature/`
        }).then (res => { 
            const featureArray = res.data.filter( feature => feature.productvid == this.props.id)
            this.setState({ 
                features : featureArray
            })
        })
    }

    innerStar = (rating) => {
        let percent = Math.round((rating/5)*100);
        let percentage=percent+"%";
        return (
        <div className="stars-inner" style={{width: percentage}}></div>
        )
    }


render(){
    return(
        <div>
            
            <table className="star-rating-table">
                <tbody>
               {this.state.features.map( feature =>
                        <tr className="hotel_a">
                        <td>{feature.title}</td>
                        <td>
                        <div className="stars-outer">
                            {this.innerStar(feature.rating)}
                        </div>
                        </td>
                        <td>{parseFloat(feature.rating).toFixed(1)}</td>
                        </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
}
export default Ratings;