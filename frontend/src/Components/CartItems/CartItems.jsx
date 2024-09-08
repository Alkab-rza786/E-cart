import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import './CartItems.css'

function CartItems() {

    const { all_product, cartItem, removeFromCart } = useContext(ShopContext)
    // console.log(cartItem)
    return (
        <div className='cart-item' >
            <div className="cart-item-format">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {
                all_product.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return <><div className='cart-item-format para'>
                            <img src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <p>{cartItem[e.id]}</p>
                            <p>${cartItem[e.id] * e.price}</p>
                            <p onClick={() => removeFromCart(e.id)} >X</p>
                        </div>
                            <hr />
                        </>
                    }
                    return null;
                })
            }

        </div>
    )
}

export default CartItems
