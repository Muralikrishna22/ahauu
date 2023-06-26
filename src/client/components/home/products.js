import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const Products = () => {
    // const getProductsRepo = async () => {
    //     return await axios({
    //         method: 'GET',
    //         url: 'https://fakestoreapi.com/products'
    //     }).then((res) => res.data);
    // };


    // const { data, isLoading, isError } = useQuery('products', () =>
    //     getProductsRepo())
    return (
        <div>
            {/* {data?.map((obj) => (
                <div className="product" key={obj.id}>
                    <div className="details">
                        <h2>{obj.category}</h2>
                        <p>{obj.description}</p>
                        <p>${obj.price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))} */}
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
        </div>
    )
}

export default Products