import React from 'react'
import '../../assets/css/Home/Categories.css'
import { categories } from './data'
import { Col, Container, Row } from 'react-bootstrap';


const Categories = () => {
    return (
        <div className='categories'>
            <h3>Categories -- </h3>
            <Row>
                {categories.map((obj, ind) => (
                    <Col xs={6} md={4} key={ind}>
                        <div className='category_card'>
                            <img src={obj.image} />
                            <p>{obj.name}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}


export default Categories