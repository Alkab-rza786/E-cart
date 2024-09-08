import React from 'react'
import './Offer.css'
import offer_img from '../../assets/products/headphone-prod-2.webp'

function Offer() {
    return (
        <div className='offer-main'>
            <div className="offer">
                <div className="offer-left">
                    <div className="offer-heading">
                        <h1>Exclusive
                            Offers For You</h1>
                        <p>ONLY ON BEST SELLERS PRODUCTS</p>
                        <button className='offer-btn'>Checkout</button>
                    </div>

                </div>
                <div className="offer-right">
                    <img src={offer_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offer
