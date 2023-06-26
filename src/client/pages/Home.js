import React, { useState } from 'react'
import Base from './layout/base'

function Home() {

    return (
        <Base>
            <main>
                {Array.from(Array(100).keys())?.map((num) => (
                    <div className="product" key={num}>
                        <div className="details">
                            <h2>Product {num}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>$19.99</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </main>
        </Base>
    )
}

export default Home