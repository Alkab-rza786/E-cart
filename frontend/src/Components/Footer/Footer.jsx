import React from 'react'
import './Footer.css'
import footer_img from '../../assets/newsletter-bg.jpeg'

function Footer() {
    return (
        <div className='footer' >
            <img src={footer_img} alt="" />
            <div className="footer-content">
                <p>Newsletter</p>
                <h1>Sign up for latest update and offer</h1>
                <div className="footer-input">
                    <input type="email" placeholder='Enter email' />
                    <button>Subscribe</button>
                </div>
                <p>Will be sure all privacy and policy</p>
            </div>
        </div>
    )
}

export default Footer
