const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const multer = require('multer');

const ProductModel = require('./Model/Product')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://kowy:bos181973@cluster0.rkwz2dq.mongodb.net/ecommerce')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/createProduct', upload.single('image'), async (req, res) => {

    const { name, price, category, description,  } = req.body;

    const image = req.file;

    if (!image) {
        return res.status(400).send('No image uploaded');
      }
    const imageData = image.buffer.toString('base64');

    const newProduct = new ProductModel({
        name,
        price,
        category,
        description,
        image: imageData
    })

    await newProduct.save();


    // ProductModel.create(req.body)
    // .then(item => res.json(item))
    // .catch(err => console.error(err))
})

app.delete('/deleteProduct/:id', (req, res) => {
    const id = req.params.id
    ProductModel.findByIdAndDelete({_id: id})
    .then(item => res.json(item))
    .catch(err => console.error(err))
})

app.get('/getProducts', (req, res) => {
    ProductModel.find({})
    .then(item => res.json(item))
    .catch(error => console.error(error))
})


app.get('/getProducts/:id', (req, res) => {
    const id = req.params.id
    ProductModel.findById({_id: id}) 
    .then(item => res.json(item))
    .catch(error => console.error(error))
})

app.put('/updateProduct/:id', (req, res) => {
    const id = req.params.id
    ProductModel.findByIdAndUpdate({_id: id} , {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
    })
    .then(item => res.json(item))
    .catch(error => console.error(error))
})

app.listen(5000, console.log('Connected to database on port 5000'))