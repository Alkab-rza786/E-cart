import React, { useContext } from 'react'
import './Navbar.css'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

function Navbar() {

    const { getTotalCartItem } = useContext(ShopContext)

    return (
        <div className='navbar' >
            <div className="nav-logo">
                <h1><Link to='/'>E-Store</Link></h1>
            </div>
            <div className="nav-menu">
                <li><Link to='/earbud' >EarBuds</Link></li>
                <li><Link to='/watch' >Watches</Link></li>
                <li><Link to='/headphone' >Headphones</Link></li>
                <li><Link to='/speaker' >Speakers</Link></li>

            </div>
            <div className="nav-cart-login">
                <div className="nav-login">
                    <button>Login</button>
                </div>
                <Link to='/cart'><div className="nav-cart">
                    <img src={cart_icon} alt="" />
                    <div className="count">{getTotalCartItem()}</div>
                </div></Link>
            </div>
        </div>
    )
}

export default Navbar
