import express from 'express';
const router = express.Router()
import Product from '../models/productModel.js'
import  asyncHandler from 'express-async-handler'

/**
 * @desc Fetch all products
 * @route '/projewels/products
 * @access Public
 */
router.get('/',asyncHandler (async (req,res)=>{
   const products = await Product.find({})
   res.json(products)
}))

/**
 * @desc Fetch specific product
 * @route '/projewels/products/:id
 * @access Public
 */
router.get('/:id',asyncHandler (async (req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message: "Product not found"})
    }
   
}))
export default router;