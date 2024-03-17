import React from 'react'
import '../../assets/css/Home/Products.css'
import { accessories } from './data'
import { Col, Container, Row } from 'react-bootstrap';


const Products = () => {
    return (
        <div className='products'>
            <div className='heading_block'>
                <span>Let's explore what fits for youuuuuuuuuu... </span><h3>Products </h3>
            </div>
            <Row>
                {accessories.map((obj, ind) => (
                    <Col xs={4} md={2} key={ind}>
                        <div className='product_card'>
                            <img src={obj.image} />
                            <p>{obj.name}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}


export default Products