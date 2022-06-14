import React from 'react'
import { CategoryItems } from './CategoryList'
import './CategoryCard.css'

//category buttons that allow you to change selected category
function Categories({setCatname}) {

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