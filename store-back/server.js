import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js'


import productRoutes from './routes/productRoutes.js'
dotenv.config()

connectDB()

const app = express()
app.get('/',(req,res)=> {
    res.send("nodemon testy test")
})

app.use('/projewels/products',productRoutes)



const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`.cyan.underline))
