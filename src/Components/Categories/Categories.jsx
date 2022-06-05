import {useState, useEffect} from 'react';
import axios from 'axios';
import React from 'react'
import { CategoryItems } from './CategoryList'
import './CategoryCard.css'

function Categories({setCatname}) {
    const [setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/allCategories`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

    return (
        <div>
            <h2>Categories</h2>
            <hr className="line"></hr>
            <div className='category-container'>
        {CategoryItems.map((item, index) => {
          return (
            <li onClick={() => {
                setCatname(item.title)
            }} key={index}>
              <span className={item.cName} >
                  <h1 className="category-name">{item.title}</h1>
              </span>
              </li>
          )
        })}
    </div>
    </div>
)}


export default Categories