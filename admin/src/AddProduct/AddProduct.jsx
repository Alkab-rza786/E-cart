import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../assets/upload_area.svg'
import axios from 'axios'

function AddProduct() {

    const [image, setImage] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('');
    const [des, setDes] = useState('')

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product', image);

        try {
            // First, upload the image
            const uploadRes = await axios.post('http://localhost:2000/upload', formData);
            const imageUrl = uploadRes.data.image_url; // Get the image URL from the upload response

            // Then, use the image URL to add the product
            const productRes = await axios.post('http://localhost:2000/addproduct', {
                name, image: imageUrl, price, category, des
            });

            console.log(productRes.data); // Log the response for the product creation
        } catch (err) {
            console.error(err); // Handle errors for both requests
        }
    };




    return (
        <div className='add-product'>
            <form action="" className='form-data' onSubmit={handleSubmit} >
                <div className="input-box">
                    <p>Product Title</p>
                    <input type="text" placeholder='Type Here' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-box-box">
                    <div className="input-box">
                        <p>Product Price</p>
                        <input type="text" placeholder='Type Here' onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <p>Product Category</p>
                        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                            <option value="airpodes">airpods</option>
                            <option value="watch">watch</option>
                            <option value="headphones">headphones</option>
                            <option value="speakers">speakers</option>
                        </select>
                    </div>

                </div>
                <div className="input-box">
                    <p>About Product</p>
                    <textarea name="" id="" rows='3' onChange={(e) => setDes(e.target.value)}  ></textarea>
                </div>

                <div className="input-box-upload">
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" id='file-input' hidden />
                </div>
                <div className="submit-btn">
                    <button>Upload</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
