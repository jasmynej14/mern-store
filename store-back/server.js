import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()
app.get('/',(req,res)=> {
    res.send("nodemon testy test")
})

app.get('/projewels/products',(req,res)=>{
    res.json(products)
})

app.get('/projewels/products/:id',(req,res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`.cyan.underline))
