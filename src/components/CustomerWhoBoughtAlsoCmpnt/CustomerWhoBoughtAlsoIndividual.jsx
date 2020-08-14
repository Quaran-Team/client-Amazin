import React, { Component } from 'react';
import  './CWBA.css';
import DynamicStarSpecial from "../RatingSummary/dynamicStarForCWBA";
import axios from "axios";
import PrimeDataService from '../../service/PrimeDataService';
class CWBAIndividual extends Component {
    constructor(props) {
        super(props)
        this.state = {
            associatedItem: this.props.associatedItem,
            items: null
        }   
    }
    componentDidMount() {
        this._isMounted = true;
        //copied from neelys component and modified
        axios.get(`http://localhost:8080/all/products/`).then((response) => {
        if (this._isMounted)  {
          this.setState({
            itemName: response.data[this.state.associatedItem-1].itemName,
            itemPrice: response.data[this.state.associatedItem-1].itemPrice,
            items: response.data
            });
          }
        });
        PrimeDataService.retrievePrime(this.state.associatedItem).then(res=>{
            this.setState({
                imgurl: res.data.imgurl,
                prime: res.data.prime
            })
        })
      }

    //   primeCheck(){
    //       if(){
    //           return 
    //       }
    //   }


    render(){
        const namer = this.state.itemName
        const pricer = this.state.itemPrice

        return(
            <div className="individualCWBA">
                <img src={this.state.imgurl} 
                    style={{
                        height: "153px", 
                        width: "153px", 
                        backgroundColor: "grey",
                        objectFit: "cover"
                        }}> 
                </img>
                <div>
                    <a href="Link to other product" >
                        <div className="namer">{namer}</div>
                    </a>
                </div>
                <div className="starSection">
                    <DynamicStarSpecial 
                        key={this.props.associatedItem}
                        associatedItem={this.props.associatedItem}
                    />
                </div>
                <div className="priceAnd">
                    $ {pricer} <img src="https://images-na.ssl-images-amazon.com/images/G/15/marketing/prime/mom/family/landing/checkPrime._CB507233612_.png" className="tinyPrime"></img>
                </div>
            </div>
        )
    }
}

export default CWBAIndividual;