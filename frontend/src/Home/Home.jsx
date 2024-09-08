import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import PopularProduct from '../Components/PopularProduct/PopularProduct'
import Offer from '../Components/Offer/Offer'


function Home() {
    return (
        <div className=''>
            <Hero />
            <PopularProduct />
            <Offer />
        </div>
    )
}

export default Home
