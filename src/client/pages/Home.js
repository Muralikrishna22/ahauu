import React, { Suspense, useState, lazy } from 'react'
import Base from './layout/base'
const Products = lazy(() => import('../components/home/products' /* webpackPrefetch: true */));


function Home() {
    return (
        <Base>
            <main>
                <Suspense fallback={<div>Loading Products.....</div>}>
                    <Products />
                </Suspense>
            </main>
        </Base>
    )
}

export default Home