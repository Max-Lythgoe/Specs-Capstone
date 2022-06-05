import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import "./MainProduct.css";

const MainProduct = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
      window.addEventListener('scroll', handleScroll); 

      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
    <div>
    <section>
  <div className='background-body-phones' style={{transform: `translateY(${offsetY * 0.0}px)`}}>
      <img className='phone1' style={{transform: `translateY(${offsetY * 0.6}px)`}} src="https://www.cspire.com/resources/images/product/devices/iphone13/iph13PM-sierrablue-3-lg.png" alt="airpod case"></img>

      <img className='phone2' style={{transform: `translateY(${offsetY * 0.3}px)`}} src="https://www.cspire.com/resources/images/product/devices/iphone13/iph13P-graphite-3-lg.png" alt="left airpod"></img>

      <img className='phone3' style={{transform: `translateY(${offsetY * .8}px)`}} src="https://www.cspire.com/resources/images/product/devices/iphone13/iph13PM-silver-3-lg.png" alt="right aripod"></img>
      <h2 className='maintext'>iPhone 13 Pro</h2>
      <Link to="/categories">
      <button className='buy-button-phones'>Buy Now</button>
      </Link>
  </div>
  </section>
  </div>
)
}
export default MainProduct;
