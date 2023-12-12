const mongoose = require('mongoose')
const express = require('express')

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    description: String,
    image: String
})

const ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel