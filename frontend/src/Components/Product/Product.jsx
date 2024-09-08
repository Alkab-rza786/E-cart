import React from 'react'
import './Product.css'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import cart_icon from '../../assets/cart_icon.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

function Product() {

    const { all_product, addToCart } = useContext(ShopContext);
    const { productId } = useParams();

    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div className='product'>
            <div className="product-left">
                <img src={product.image} alt="" />
            </div>
            <div className="product-right">
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p className='product-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima suscipit, at earum saepe architecto tempore vero consequatur aliquid. Deleniti assumenda, obcaecati numquam ea nisi consequuntur odio dolores repellat minima!</p>

                <div className="product-btn">
                    <img src={cart_icon} alt="" />
                    <button onClick={() => addToCart(product.id)} >Add to Cart</button>
                </div>
                <p className='product-category' >Category : {product.category}</p>
                <div className="product-share">
                    <p>Share : </p>
                    <div className="product-share-icon">
                        <FaWhatsapp />
                        <FaTwitter />
                        <CiFacebook />
                        <FaLinkedin />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Product
