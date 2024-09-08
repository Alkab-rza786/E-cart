
import React, { useContext } from 'react'
import './ShopCategory.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Items from '../Items/Items'


function ShopCategory(props) {

    const { all_product } = useContext(ShopContext)

    return (
        <div className='shop-category'>
            <div className="banner-img">
                <div className="banner-img-des">
                    <h1>{props.category.toUpperCase()}</h1>
                    <h2 >FLAT 30% OFF</h2>
                    <p>12 Hours 20 Mintues</p>
                </div>
                <img src={props.banner} alt="" />
            </div>
            <div className="shop-category-items">
                {
                    all_product.map((item) => {
                        if (item.category === props.category) {
                            return <Items id={item.id} image={item.image} name={item.name} price={item.price} />
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ShopCategory
