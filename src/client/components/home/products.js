import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useData } from '../../../server/data'

const Products = () => {
    const getProductsRepo = () => {
        return axios({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        });
    };

    const { data, isLoading, error, } = useData('products', getProductsRepo)
    // if (isLoading) {
    //     throw new Promise(() => { }); // Trigger suspense until data is loaded
    // }

    if (error || !data) {
        return <div>Error: Failed to fetch product data</div>;
    }

    return (
        <div>
            <h3>Products</h3>
            {data?.map((obj) => (
                <div className="product" key={obj.id}>
                    <div className="details">
                        <h2>{obj.category}</h2>
                        <p>{obj.description}</p>
                        <p>${obj.price}</p>
                        <button>Add to Cart</button>
                    </div>
                    <div>
                        <img src={obj.image} alt="image" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products