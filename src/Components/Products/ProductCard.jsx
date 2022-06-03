import {useState} from 'react';
import Modal from '../Modal/Modal';

import './productCard.css'

function ProductCard({data, addToCart}) {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <div>
        <div className='product-card' onClick={() => {setOpenModal(true)}}>
            <img className="item-data img" src={data.img_link} alt="productImg"></img>
            <h3 className="item-data">{data.name}</h3>
            <h4 className="item-data category">{data.category.toUpperCase()}</h4>
            <h2 className="item-data">${data.price}</h2>
            <button title="Add To Cart" onClick={() => addToCart(data.id)}><i className="cart-icon fa-solid fa-cart-plus"></i></button>
            </div>
            <Modal openModal={openModal} setOpenModal={setOpenModal} data={data} addToCart={addToCart}/>
        </div>
    )
}

export default ProductCard