import React from 'react'
import Rating from '../components/Rating'
import {Card} from 'react-bootstrap'
const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 h-100 rounded">
            <a href="#">
                <Card.Img src={product.image} variant='top' className="w-50"/>
            </a>
            <Card.Body>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text as="div">
                    
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </Card.Text>
                <Card.Text as="h3">
                    {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
