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
            getData()
        })
    }

    const totalCart = () => {
        axios.get(`http://localhost:4000/api/cartTotal/${currentUser}`)
        .then((res) => {
            setTotal(res.data[0].sum)
        })
    }

    const checkoutButton = () => {
        console.log(data)
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: data
            })
        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({url}) => {
            console.log(url)
            window.location = url
        }).catch(e => {
            console.error(e.error)
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
        <h3 className="subtitle">Subtotal: ${Number(total).toFixed(2)} </h3>
        <h3 className="subtitle">Shipping: FREE </h3>
        <h2>Total: ${Number(total).toFixed(2)} </h2>
        <button onClick={() => checkoutButton()} className="checkout-btn"><b>Go to Checkout</b></button>
        </div>
        </div>

    </div>
  )
}

export default Cart