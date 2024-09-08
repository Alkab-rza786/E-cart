import React from 'react'
import './Hero.css'
import banner_img from '../../assets/banner-img.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="hero-left-heading">
                    <h1>SALES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis explicabo commodi officia vero vitae sed veritatis maiores voluptate totam quod?</p>
                    <div className="hero-left-btn">
                        <button>Read More</button>
                        <button style={{ background: "White", color: "black" }}>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={banner_img} alt="" />
            </div>
        </div>
    )
}

export default Hero
