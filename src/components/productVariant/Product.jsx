import React, {Component} from 'react'; 
import Header from './variant-Components/Header';
import Availability from './variant-Components/Availability.jsx';
import Details from './variant-Components/Details.jsx'; 
import DropdownMenu from './variant-Components/DropdownMenu.jsx'
import Sponsered from './variant-Components/Sponsered.jsx';
import './product.css'
import Ratings from "./variant-Components/Ratings";
import Axios from 'axios';
import AboutList from './variant-Components/AboutList';
import { Dropdown, DropdownButton } from 'react-bootstrap'


class Product extends Component {

    state = {
        prodID: "", 
        seller: "", 
        user_rating: "",
        tag: "", 
        tag_title : "",
        similar_item : "", 
        rating: "", 
        category : "",
        category_link : "", 
        optionDropdown: [],
        optionImage:[],
        optionCustomBtn:[],
        title: "",
        about_item: "", 
        discount: "", 
        price: "",
        list_price: "", 
        shipping: "", 
        ship_price: "", 
        type_selector: "", 
        selector_img: "", 
        selector_text: "",
        message: "", 
        inStock: 0,
        shipping_message: "", 
        banner: "", 
        lowstock_message: "",
        type: [],
        selection:0
    }

    componentDidMount() {
        const { match : {params}} = this.props;
        this.loadItem();
    }

    loadItem = () => {
        //calls the product by id
        Axios({
            method: 'GET', 
            url: `http://localhost:8080/variant/product/${this.props.match.params.id}`
        }).then (res => { 
            //all the properties of the product are saved in state - these do not change upon selection.
            this.setState({ 
                prodID: res.data.id,
                seller: res.data.seller, 
                tag : res.data.tag, 
                tag_title : res.data.tag_title, 
                similar_item : res.data.similar_item, 
                rating : res.data.rating, 
                category: res.data.category, 
                category_link : res.data.category_link,
                user_rating: res.data.user_rating
            })
            this.loadSelector();
        })
    }

    //this is all to figure out what the selection of the user is.
    //the work here reverts everything to default which is a boolean in the data.
    loadSelector = () => {
        //this pulls all the selections in
       Axios({
           method: 'GET', 
           url: `http://localhost:8080/variant/selector`
       }).then (res => { 
           //filters out the selections based on the product
           const trueSelections = res.data.filter( select => select.productID === this.state.prodID)
          //filters out the selection to the default selection of the product
           const defaultTrueSelection = trueSelections.filter( defaulting => defaulting.default === true)

           //the default options have been separated out into this function which goes through how everything is
           //displayed after selecting default options.
           this.optionLogic(trueSelections)
           
           //catches the id of the selection
           this.setState({
               options : trueSelections,
               selection : defaultTrueSelection[0].id,
               title : defaultTrueSelection[0].title, 
               about_item: defaultTrueSelection[0].about_item, 
               discount: defaultTrueSelection[0].discount, 
               list_price: defaultTrueSelection[0].list_price, 
               shipping: defaultTrueSelection[0].shipping, 
               ship_price: defaultTrueSelection[0].ship_price, 
               type_selector: defaultTrueSelection[0].type_selector, 
               selector_img: defaultTrueSelection[0].selector_img, 
               selector_text: defaultTrueSelection[0].selector_text,
               inStock: defaultTrueSelection[0].inStock, 
               message: defaultTrueSelection[0].message, 
               price: defaultTrueSelection[0].price, 
               lowstock_message: defaultTrueSelection[0].lowstock_message, 
               shipping_message: defaultTrueSelection[0].shipping_message
           })
       })
   }


   optionLogic = (options) => {
       //function global variables initialized
       let dropdownOption = []; 
       let imageOption = []; 
       let custombtnOption =[];

       //this goes through the options and sorts them based on the type. 
       //in the future this would be more useful if there were multiple options available ie. images and dropdown selections
       options.map( option => {
            switch(option.type_selector){
                case 1: 
                    dropdownOption.push(option)
                    break;
                case 2:
                    imageOption.push(option)
                    break;
                case 3:
                    custombtnOption.push(option)
                    break;
                default:
                    "No options found"
            }
       })


       if (dropdownOption.length > 0) {
            this.setState({
                optionDropdown : dropdownOption
            })
            console.log(this.state.optionDropdown)
       }
       if (imageOption.length > 0) {
           this.setState({
               optionImage : imageOption
           })
       }
       if (custombtnOption.length > 0) {
           this.setState({
               optionCustomBtn : custombtnOption
           })
       }
   }

   dropdownOption = () => {
       if (this.state.optionDropdown.length >0 ){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {this.state.optionDropdown.map( option => <DropdownMenu key={option.id} id={option.id} text={option.selector_text} />)}
            </Dropdown.Menu>
        </Dropdown>
        )}
   }

   imageOption = (option2) => {
        return <div> You are in option 2</div>
   }

   custombtnOption = (option3) => {
    return <div> You are in option 3</div>
   }


   changeOption = () => {

   }

   //Once upon a time in a far, far away galaxy... I had all the calls in the same file. And then set state became finicky and would only pass half the info
    // loadDetails = () => {
    //     //calls the all of the details
    //     Axios({
    //         method: 'GET', 
    //         url: `http://localhost:8080/variant/detail`
    //     }).then (res => { 
    //         //filters the details based on the selection
    //         const details = res.data.filter( detail => detail.selectorID === this.state.selection )
    //         this.setState({ 
    //             details : details
    //         })
    //     })
    // }

    render(){      
        return(
            <div className="productVariant">
                <Header 
                    // key = {this.state.prodID}
                    prodID = { this.state.prodID }
                    seller = { this.state.seller }
                    user_ratings = { this.state.user_rating }
                    tag = { this.state.tag }
                    tag_title = { this.state.tag_title}
                    rating = { this.state.rating }
                    similar_item = { this.state.similar_item }
                    category = { this.state.category }
                    category_link = { this.state.category_link }
                    selection = { this.state.selection }
                    title = {this.state.title}
                />
                <hr id="separator" />
                <Availability 
                    // key = { this.state.selection}
                    id = { this.state.selection }
                    price = { this.state.price }
                    discount = { this.state.discount } 
                    list_price = { this.state.list_price } 
                    shipping = { this.state.shipping } 
                    ship_price = { this.state.ship_price } 
                    message = { this.state.message }
                    banner = { this.state.banner }
                    shipping_message = { this.state.shipping_message }
                    lowstock_message = { this.state.lowstock_message }
                    inStock = { this.state.inStock }
                />

                <div className="options">
                    {/* {this.state.optionDropdown.map( option =>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                           <DropdownMenu key={option.id} id={option.id} text={option.selector_text} />
                        </Dropdown.Menu>
                    </Dropdown>
                    )} */}
                    <div>
                        {this.dropdownOption()}
                    </div>



                    <div className="image">

                    </div>
                    <div className="custom">

                    </div>
                </div>
      
                    <Details 
                        // key= { this.state.selection }
                        id = { this.state.selection }
                    />

                <hr id="separator" />
                <AboutList 
                    // key = { this.state.id }
                    about_item = { this.state.about_item }
                />

                <Sponsered 
                    id = { this.state.prodID }
                    category = { this.state.category }
                    category_link = { this.state.category_link }
                />


                <hr id="separator" />
                {/* <Ratings /> */}
            </div>
        )
    }
}

export default Product;