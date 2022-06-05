import { useEffect } from 'react';
import Aos from 'aos';
import './ItemCard.css'
import 'aos/dist/aos.css'

const ItemCard = ({data, removeItem}) => {

    //scroll animations
    useEffect(() => {
      Aos.init({duration: 1000});
  }, []);

  return (
    <div data-aos="fade-up" className='cart-card'>
        <img className="product-img" src={data.img_link} alt="productImg"></img>
        <div className="maintwo">
            <h3 className="product-name">{data.name}</h3>
            <h4 className="product-cat">{data.category}</h4>
            </div>
            <h2 className="price">${data.price}</h2>
            <button title="Remove From Cart" onClick={() => removeItem(data.cart_id)}><i className="fa-solid fa-circle-minus action"></i></button>
    </div>
  )
}

export default ItemCard