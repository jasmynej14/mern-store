import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import * as Icon from 'react-bootstrap-icons';
const ProductScreen = ( { match }) => {
    const [product,setProduct] = useState({})
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/projewels/products/${match.params.id}`)
            setProduct(data)
        }

        fetchProduct()
    },[match])
    return (
        <div>
            <Link className="btn btn-primary my-3" to="/"><Icon.CaretLeft/> Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price} </strong>
                                    </Col>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock':'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn btn-block" type="button" disabled={product.countInStock === 0 }>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
