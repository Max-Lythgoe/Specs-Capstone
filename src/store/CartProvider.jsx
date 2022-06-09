import {useState} from 'react';
import CartContext from "./cart-context";
import axios from 'axios';

const CartProvider = props => {

    const [update, setUpdate] = useState(0)
    const [data, setData] = useState([])

    const addItemToCartHandler = (id) => {
        let object = {
            userID: 1,
            productID: id
        }

        axios.post('http://localhost:4000/api/addToCart', object)
        .then((res) => {
            setUpdate(++update)
        })
    }

    let currentUser = 1

    const getData = () => {
        axios.get(`http://localhost:4000/api/userCart/${currentUser}`)
        .then((res) => {
            setData(res.data)
        })
    }

    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem:addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;