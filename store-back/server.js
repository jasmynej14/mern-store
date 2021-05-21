const express = require('express')
const app = express()
const products = require('./data/products')

app.get('/',(req,res)=> {
    res.send("we outchea")
})

app.get('/projewels/products',(req,res)=>{
    res.json(products)
})

app.get('/projewels/products/:id',(req,res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})
app.listen(5000,console.log('Server running on http://localhost:5000'))
