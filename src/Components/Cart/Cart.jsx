import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'
import './ItemCard.css'

const Cart = ({update, setUpdate}) => {

    const [data, setData] = useState([])
    const [total, setTotal] = useState([])

    let currentUser = 1

    const getData = () => {
        axios.get(`http://localhost:4000/api/userCart/${currentUser}`)
        .then((res) => {
            setData(res.data)
        })
    }

    const removeItem = (id) => {
        axios.delete(`http://localhost:4000/api/userCart/${id}`)
        .then((res) => {
            setUpdate(update + 1)
            console.log('item removed')
            getData()
        })
    }

    const totalCart = () => {
        axios.get(`http://localhost:4000/api/cartTotal/${currentUser}`)
        .then((res) => {
            setTotal(res.data[0].sum)
            console.log(res.data[0].sum)
        })
    }

    useEffect(() => {
        getData()
        totalCart()
    }, [update])

  return (
    <div>
        <h2>My Cart</h2>
        <p>Items in Cart: {data.length}</p>
        <hr className="line"></hr>
        <div className="main-body">
        <div className="cart-container">
        {data.map((element, index) => {
            return <ItemCard data={element} key={index} removeItem={removeItem}/>
        })}
        <h2 className="subtitle">Subtotal: ${Number(total).toFixed(2)} </h2>
        <h2 className="subtitle">Shipping: FREE </h2>
        <h2 className="subtitle">Taxes: ${Number(total * .047).toFixed(2)} </h2>
        <h2>Total: ${Number((total * .047) + (total)).toFixed(2)} </h2>
        </div>
        </div>

    </div>
  )
}

export default Cart