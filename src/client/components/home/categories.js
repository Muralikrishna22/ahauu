import React from 'react'
import { useData } from '../../../server/data';
import axios from 'axios';

const Categories = () => {
    const getProductCategoriesRepo = () => {
        return axios({
            method: 'GET',
            url: 'https://fakestoreapi.com/products/categories'
        });
    };
    const { data, isLoading, error, } = useData('categories', getProductCategoriesRepo)

    if (error || !data) {
        return <div>Error: Failed to fetch product categories data</div>;
    }
    return (
        <div>
            <h3>Categories</h3>
            {data.map((obj, ind) => (
                <div key={ind}>
                    <input type='checkbox' />
                    <label>{obj}</label>
                </div>
            ))}
        </div>
    )
}


export default Categories