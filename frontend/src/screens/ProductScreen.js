import React from 'react'
import {Link} from 'react-router-dom'
import { Row, Col , Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import Product from './../components/Product'
import products from './../products'

function ProductScreen(props) { 
    console.log ("sadat")

    const product=products.find((p) => p._id == props.match.params.id)

    return (
        <Product product={products}>
            {console.log (products)}
        </Product>
    )
}

export default ProductScreen
