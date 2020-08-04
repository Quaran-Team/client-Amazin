import React, {Component} from 'react'; 

class Availability extends Component {
    constructor(props) {
        super(props)
    }

    //main pricing set-up for this section is called here
    pricingLogic = (list_price, price, shipping, ship_price, discount, inStock, message, lowstock_message) => {
        //derived values needed for discount
        const saving_price = parseFloat(list_price) - parseFloat(price);
        const saving_price_rounded = saving_price.toFixed(2);
        const saving_percent = (parseFloat(saving_price)/parseFloat(list_price))*100
        const saving_percent_rounded = saving_percent.toFixed(0);


        //tailored specifically for the formatting of a discount being added
        //if there is a discount on the item listed
        if (discount == true && inStock > 10) {
            return(
            <div>
                <div id="price" className="a-section a-spacing-small"><table className="a-lineitem"><tbody>
                <tr><td className="a-color-secondary a-size-base a-text-right a-nowrap">
                         List Price:
                    </td><td className="a-span12 a-color-secondary a-size-base"><span className="priceBlockStrikePriceString a-text-strike">
                        {list_price}
                    </span></td></tr><tr><td id="priceblock_ourprice_lbl" className="a-color-secondary a-size-base a-text-right a-nowrap">
                         Price:
                    </td><td className="a-span12"><span id="priceblock_ourprice" className="a-size-medium a-color-price priceBlockBuyingPriceString">
                        ${price}
                    </span>
                    { this.shippingLogic(shipping, ship_price)} 
                    </td></tr><tr id="regularprice-savings"><td className="a-color-secondary a-size-base a-text-right a-nowrap">
                        You Save:
                    </td><td className="a-span12 a-color-price a-size-base priceBlockSavingsString">
                        $
                    <span id="savings">
                        {saving_price_rounded}
                    </span>
                        (<span id="percentage-saved">
                        {saving_percent_rounded}
                    </span> %)
                    </td></tr></tbody></table></div><a className="maple-banner-link" href="*"><div className="a-section maple-banner__text">
                {message}
            </div></a>
            </div>

            //this is if the stock supply is running low
            )} else if ( inStock <= 10 && inStock > 0) {
                return(
                    <div id="price" className="a-section a-spacing-small">
                    <div className="running-low-stock-banner"><h3>
                        Only {inStock} are left!
                    </h3></div>
                    <table className="a-lineitem"><tbody>
                    <tr><td id="priceblock_ourprice_lbl" className="a-color-secondary a-size-base a-text-right a-nowrap">
                        Price:
                    </td><td className="a-span12"><span id="priceblock_ourprice" className="a-size-medium a-color-price priceBlockBuyingPriceString">
                        {price}
                    </span>
                        { this.shippingLogic(shipping, ship_price)}
                    </td></tr></tbody></table><a className="maple-banner-link" href="*"><div className="a-section maple-banner__text">
                        {lowstock_message}
                    </div></a></div>

        //this is if the stock supply is empty
        )} else if ( parseInt(inStock) === 0){
            <div className="out-of-stock-banner"><h3>
                Sorry, this item is out of Stock!
            </h3></div>
        
        // this is the default scenario
        } else {
            return(
                <div id="price" className="a-section a-spacing-small"><table className="a-lineitem"><tbody>
                <tr><td id="priceblock_ourprice_lbl" className="a-color-secondary a-size-base a-text-right a-nowrap">
                    Price:
                </td><td className="a-span12"><span id="priceblock_ourprice" className="a-size-medium a-color-price priceBlockBuyingPriceString">
                    {price}
                </span>
                    { this.shippingLogic(shipping, ship_price)}
                </td></tr></tbody></table><a className="maple-banner-link" href="*"><div className="a-section maple-banner__text">
                    {lowstock_message}
                </div></a></div>
        )}
    }

    //shipping logic - above equation calls on this function.
    shippingLogic = (shipping, ship_price) => {
        if(shipping === true || parseFloat(ship_price) === 0){
        return (
        <span id="ourprice_shippingmessage" className="a-size-base a-color-base">
            + $
        <span className="a-color-secondary a-size-base">
            {ship_price}
        </span>
            shipping
        </span>
    )} else {
        return (
            <span id="ourprice_shippingmessage" className="a-size-base a-color-base">
                +
            <span className="a-color-secondary a-size-base">
                FREE
            </span>
                shipping
            </span>
        )}
    }

render() {
    return(
        <div>
            {this.pricingLogic(this.props.list_price, this.props.price, this.props.shipping, this.props.ship_price, this.props.discount, this.props.inStock, this.props.message, this.props.lowstock_message )}
        </div>
    )}
}

export default Availability;