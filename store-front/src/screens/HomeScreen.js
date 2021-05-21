import React, { useState,useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
const HomeScreen = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/projewels/products')
            setProducts(data)
        }

        fetchProducts()
    },[])
    return (
        <div>
            <h1>Latest Products</h1>
            <Row className="gy-5">
                {products.map(product =>(
                    <Col sm={12} md={6} lg={4}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
