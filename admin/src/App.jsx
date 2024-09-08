import React from 'react'
import Navbar from './Navbar/Navbar'
import Menu from './Menu/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import ListProduct from './ListProduct/ListProduct'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: "flex" }} >
        <Menu />
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} ></Route>
          <Route path='/listproduct' element={<ListProduct />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
