import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../Products/ProductCard'

import '../Products/Products.css'
import Categories from './Categories';

function ProductByCategory({update, setUpdate}) {
    const [data, setData] = useState([])
    const [catname, setCatname] = useState('phones')

    const addToCart = (id) => {
        let object = {
            userID: 1,
            productID: id
        }

        axios.post('http://localhost:4000/api/addToCart', object)
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/categories/${catname}`)
        .then((res) => {
            setData(res.data)
        })
    }, [catname])

    return (
        <div>
            <Categories setCatname={setCatname} />
            <h2>Products</h2>
            <hr className="line"></hr>
            <div className='products-container'>
            {data.map((element,index) => {
                return <ProductCard data={element} key={index} addToCart={addToCart} />
            })}
            </div>
        </div>
    )

}

export default ProductByCategory