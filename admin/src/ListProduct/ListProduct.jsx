import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ListProduct.css'

function ListProduct() {

    const [allproduct, setAllproduct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:2000/getproduct').then(res => {
            setAllproduct(res.data)
            // console.log(allproduct)
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        console.log("function is working")
        axios.delete(`http://localhost:2000/removeproduct/${id}`)
            .then(res => {
                console.log(res)
                location.reload()
            }).catch(err => console.log(err))
    }

    return (
        <div className='list-product'>
            <div className="listproduct-heading">
                <p>Product</p>
                <p>Name</p>
                <p>Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <hr />
            <div className="listproduct">
                {
                    allproduct.map((item, i) => {
                        return <div className='listproduct-heading' key={item.id} >
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                            <p onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }} >X</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ListProduct
