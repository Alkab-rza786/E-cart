import React from 'react'
import './Items.css'
import img from '../../assets/products/headphone-prod-2.webp'
import { Link } from 'react-router-dom'

function Items(props) {
    return (
        <Link to={`/product/${props.id}`}> <div className='item'>
            <img src={props.image} alt="" />
            <div className="item-info">
                <p className='item-name'>{props.name}</p>
                <p >₹{props.price}</p>
            </div>
        </div></Link>
    )
}

export default Items
