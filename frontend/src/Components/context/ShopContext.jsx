import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios'
// import all_product from '../../assets/all_product'




export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 100; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [all_product, setAll_product] = useState([])
    const [cartItem, setCartItem] = useState(getDefaultCart())


    useEffect(() => {
        axios.get('http://localhost:2000/getproduct').then(res => {
            setAll_product(res.data)
        }).catch(err => console.log(err))
    }, [])


    const addToCart = (itemId) => {

        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {

        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartItem = () => {
        let total = 0;
        for (let item in cartItem) {
            if (cartItem[item] > 0) {
                total += cartItem[item]
            }
        }
        return total
    }

    const contextValue = { all_product, addToCart, removeFromCart, cartItem, getTotalCartItem };

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider