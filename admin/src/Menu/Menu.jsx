import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <div className='menu' >

            <div className="button">
                <button>  <Link to='/addproduct' >Add Product</Link></button>
                <button><Link to='/listproduct'>List of Product</Link></button>
            </div>

        </div>
    )
}

export default Menu
