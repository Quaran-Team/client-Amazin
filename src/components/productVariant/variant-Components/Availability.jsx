import React from 'react'; 

function Availability() {
    return(
        <div>
            <div id="price" className="a-section a-spacing-small">
                <table className="a-lineitem">
                    <tbody>
                        <tr>
                            <td className="a-color-secondary a-size-base a-text-right a-nowrap">
                                List Price:
                            </td>
                            <td className="a-span12 a-color-secondary a-size-base">
                                <span className="priceBlockStrikePriceString a-text-strike">
                                    $0.00
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td id="priceblock_ourprice_lbl" className="a-color-secondary a-size-base a-text-right a-nowrap">
                                Price:
                            </td>
                            <td className="a-span12">
                                <span id="priceblock_ourprice" className="a-size-medium a-color-price priceBlockBuyingPriceString">
                                     $0.00
                                </span>
                                <span id="ourprice_shippingmessage" className="a-size-base a-color-base">
                                    + $
                                    <span className="a-color-secondary a-size-base">
                                        0.00
                                    </span>
                                    shipping
                                </span>
                            </td>
                        </tr>
                        <tr id="regularprice-savings">
                            <td className="a-color-secondary a-size-base a-text-right a-nowrap">
                                You Save:
                            </td>
                            <td className="a-span12 a-color-price a-size-base priceBlockSavingsString">
                                $
                                <span id="savings">
                                    0.00
                                </span>
                                (
                                <span id="percentage-saved">
                                    0
                                </span>
                                %)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a className="maple-banner-link" href="*">
            <div className="a-section maple-banner__text">
                This is a banner if there is a promotion
            </div>
            </a>
        </div>
    )
}

export default Availability;