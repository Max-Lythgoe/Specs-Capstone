import {useState} from 'react';
import Products from '../Products/Products'
import MainProduct from '../MainProduct/MainProduct'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer'
import Parallax from '../MainProduct/Parallax';

function Home() {
    const [update, setUpdate] = useState(0)
  
    return (
      <div className="App">
        <NavBar />
        <Parallax />
        <Products update={update} setUpdate={setUpdate}/>
        <MainProduct />
        <Footer />
      </div>
    );
}
  
export default Home;