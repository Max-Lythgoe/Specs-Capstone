import {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import Aos from 'aos';
import './productCard.css'
import 'aos/dist/aos.css'

function ProductCard({data, addToCart}) {
    const [openModal, setOpenModal] = useState(false);
    
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div>
        <div data-aos="fade-up" className='product-card' onClick={() => {setOpenModal(true)}}>
            <img className="item-data img" src={data.img_link} alt="productImg"></img>
            <h3 className="item-data">{data.name}</h3>
            <h4 className="item-data category">{data.category.toUpperCase()}</h4>
            <h2 className="item-data">${data.price}</h2>
            </div>
            <Modal openModal={openModal} setOpenModal={setOpenModal} data={data} addToCart={addToCart}/>
        </div>
    )
}

export default ProductCard