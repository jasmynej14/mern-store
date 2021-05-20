import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
const HomeScreen = () => {
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