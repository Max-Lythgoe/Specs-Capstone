import { useState} from 'react';
import Modal from '../Modal/Modal';
import './productCard.css';

//individual product cards, when clicked it opens modal view
function ProductCard({data, addToCart, setUpdate, update}) {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <div>
        <div className='product-card' onClick={() => {setOpenModal(true)}}>
            <img className="item-data img" src={data.img_link} alt="productImg"></img>
            <h3 className="item-data">{data.name}</h3>
            <h4 className="item-data category">{data.category.toUpperCase()}</h4>
            <h2 className="item-data">${data.price}</h2>
            </div>
            <Modal setUpdate={setUpdate} openModal={openModal} setOpenModal={setOpenModal} data={data} update={update} addToCart={addToCart}/>
        </div>
    )
}

export default ProductCard