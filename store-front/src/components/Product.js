import React from 'react'
import {Card} from 'react-bootstrap'
const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href="#">
                <Card.Img src={product.image} variant='top'/>
            </a>
            <Card.Body>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
