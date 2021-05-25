const express = require('express')
const dotenv = require('dotenv')
const app = express()
const products = require('./data/products')

dotenv.config()
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
app.listen(PORT,console.log(`Server running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`))
