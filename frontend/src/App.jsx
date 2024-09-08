import React from 'react'
import Home from './Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product'
import CartItems from './Components/CartItems/CartItems'
import headphone_banner from './assets/category/cat-1.jpg'
import speaker_banner from './assets/category/cat-2.jpg'
import watch_banner from './assets/category/cat-3.jpg'
import earbud_banner from './assets/category/cat-4.jpg'




import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopCategory from './Components/ShopCategory/ShopCategory'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/watch' element={<ShopCategory banner={watch_banner} category="watch" />} ></Route>
          <Route path='/earbud' element={<ShopCategory banner={earbud_banner} category="airpods" />} ></Route>
          <Route path='/headphone' element={<ShopCategory banner={headphone_banner} category="headphones" />} ></Route>
          <Route path='/speaker' element={<ShopCategory banner={speaker_banner} category="speakers" />} ></Route>
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} ></Route>
          </Route>
          <Route path='/cart' element={<CartItems />} ></Route>
        </Routes >
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
