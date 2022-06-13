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

      <img className='phone1' style={{transform: `translateY(${offsetY * 0.3}px)`}} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios15-iphone13-pro-search-animation.gif" alt="left airpod"></img>

      <img className='phone2' style={{transform: `translateY(${offsetY * .8}px)`}} src="https://manuals.plus/wp-content/uploads/2021/09/use-stickers-with-imessage-on-your-iphone-ipad-and-ipod-touch-apple-support_613d42ba9660a.gif" alt="right aripod"></img>
      <h2 className='maintext'>iPhone 13 Pro</h2>
      <Link to="/categories">
      <button className='buy-button-phones'>Shop Now</button>
      </Link>
  </div>
  </section>
  </div>
)
}
export default MainProduct;
