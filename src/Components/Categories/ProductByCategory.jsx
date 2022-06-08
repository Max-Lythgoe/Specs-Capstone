import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../Products/ProductCard'

import '../Products/Products.css'
import Categories from './Categories';

function ProductByCategory({update, setUpdate}) {
    const [data, setData] = useState([])
    const [catname, setCatname] = useState('phones')
    const [filter, setFilter] = useState('alph')

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
            if (filter === 'low') {
            setData(res.data.sort((a, b) => a.price - b.price))
        } else if (filter === 'high') {
            setData(res.data.sort((a, b) => b.price - a.price))
        } else if (filter === 'alph') {
            setData(res.data.sort((a, b) => a.name.localeCompare(b.name)))
        }})
    }, [catname, filter])

    return (
        <div>
            <Categories setCatname={setCatname} />
            <h2>Products</h2>
            <hr className="line"></hr>
            <label className='sort'>Sort By:</label>
            <select className="selector" onChange={(event) => {setFilter(event.target.value)}} name="price-sort">
                <option value="low">Price: Low-to-High</option>
                <option value="high">Price: High-to-Low</option>
                <option value="alph">Product Name: A-Z</option>
            </select>
            <div className='products-container'>
            {data.map((element,index) => {
                return <ProductCard data={element} key={index} addToCart={addToCart} />
            })}
            </div>
        </div>
    )

}

export default ProductByCategory