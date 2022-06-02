import {useState} from 'react';
import Products from '../Products/Products'
import MainProduct from '../MainProduct/MainProduct'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer'

function Home() {
    const [update, setUpdate] = useState(0)
  
    return (
      <div className="App">
        <NavBar />
        <MainProduct />
        <Products update={update} setUpdate={setUpdate}/>
        <Footer />
      </div>
    );
  }
  
  export default Home;