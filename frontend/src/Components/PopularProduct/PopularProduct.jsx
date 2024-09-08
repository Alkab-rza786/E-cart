import React from 'react'
import './PopularProduct.css'
import Items from '../Items/Items'
import popular_data from '../../assets/popular_data'

function PopularProduct() {
    return (
        <div className='popular-product'>
            <h1>Popular Product</h1>
            <hr />
            <div className="popular-product-item">
                {
                    popular_data.map((item, i) => {
                        return <Items id={item.id} image={item.image} name={item.name} price={item.price} />
                    })
                }
            </div>
        </div>
    )
}

export default PopularProduct
