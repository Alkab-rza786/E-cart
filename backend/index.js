const port = 2000;

const express = require('express');

const app = express();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const { type } = require('os')

app.use(express.json());
app.use(cors())

// Database connection 

mongoose.connect("mongodb://localhost:27017/E-store");

// Image store engine 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })
//creating upload and end point for images

app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

app.get('/', (req, res) => {
    res.send("Express App is Running ")
})

// SCHEMA FOR CREATING PRODUCT 

const Product = mongoose.model("product", {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    des: {
        type: String,
        required: true
    }

})

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({})
    let id = 0;
    if (products.length > 0) {
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0];

        id = last_product.id + 1;

    } else {
        id = 1;
    }
    const { name, image, category, price, des } = req.body;
    Product.create({
        id, name, image, category, price, des
    }).then(result => {
        return res.status(200).json(result)
    }).catch(err => console.log(err))

})

// creating a end point for fetching the data from the database

app.get('/getproduct', async (req, res) => {
    const data = await Product.find({})
    return res.json(data)
})

// Creatign end point for removing the element

app.delete('/removeproduct/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findOneAndDelete({ id: id });
    res.json({
        success: true,
        name: req.body.name
    })
})


app.listen(port, (err) => {
    if (!err) {
        console.log("Server is Running on Port " + port)
    } else {
        console.log("Error" + err)
    }
})