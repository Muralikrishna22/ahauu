import React, { Suspense, useState, lazy } from 'react'
import Base from './layout/base'
import { Col, Container, Row } from 'react-bootstrap';
const Categories = lazy(() => import('../components/home/categories' /* webpackPrefetch: true */));
const Products = lazy(() => import('../components/home/products' /* webpackPrefetch: true */));

function Home() {
    return (
        <Base>
            <main>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Suspense fallback={<div>Loading categories.....</div>}>
                                <Categories />
                            </Suspense>
                        </Col>
                        <Col md={9}>
                            <Suspense fallback={<div>Loading Products.....</div>}>
                                <Products />
                            </Suspense>
                        </Col>
                    </Row>
                </Container>
            </main>
        </Base>
    )
}

export default Home