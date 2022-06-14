import {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './Products.css'

//featured products (computers) on homepage
function Products({update, setUpdate}) {
    const [data, setData] = useState([]);

    const addToCart = (id) => {
        let object = {
            userID: 1,
            productID: id
        }

        axios.post('http://localhost:4000/api/addToCart', object)
        .then((res) => {
            setUpdate(++update)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/allProducts`)
        .then((res) => {
            setData(res.data)
        })
    }, [])

    return (
        <div>
            <h2>Deals on Computers</h2>
            <p>10% off now thru July 30th!</p>
            <hr className="line"></hr>
            <div className='products-container'>
            {data.map((element,index) => {
                return <ProductCard data={element} key={index} addToCart={addToCart} setUpdate={setUpdate} update={update}/>
            })}
            </div>
        </div>
    )

}

export default Products