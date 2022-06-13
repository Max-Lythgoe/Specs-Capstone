import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import './Parallax.css'

const Parallax = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
      <div>
      <section>
    <div className='background-body' style={{transform: `translateY(${offsetY * 0.5}px)`}}>
        <img className='airpod-case' style={{transform: `translateY(${offsetY * 0.3}px)`}} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/airpods-pro-case.png" alt="airpod case"></img>

        <img className='airpod-left' style={{transform: `translateY(${offsetY * 0.7}px)`}} src="https://cdn.shopify.com/s/files/1/1234/9356/products/image_bcb0306a-f71d-4424-9c39-928287454c32_500x500.png?v=1579848330" alt="left airpod"></img>

        <img className='airpod-right' style={{transform: `translateY(${offsetY * 0.9}px)`}} src="https://cdn.shopify.com/s/files/1/1234/9356/products/image_8086ce1c-e7f3-4a02-a972-08d28595c226_500x500.png?v=1579848351" alt="right aripod"></img>
        <h2 className='maintext'>Airpods Pro</h2>
        <h3 className='subtext'>Magic like you’ve never heard.</h3>
        <Link to="/categories/">
        <button className='buy-button'>Buy Now</button>
        </Link>
    </div>
    </section>
    </div>
  )
}

export default Parallax