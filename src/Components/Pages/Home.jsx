import React from 'react';
import Products from '../Products/Products'
import MainProduct from '../MainProduct/MainProduct'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Parallax from '../MainProduct/Parallax';
import AnimatedAccessory from '../MainProduct/AnimatedAccessory';

function Home({update, setUpdate}) {
  
    return (
      <div className="App">
        <NavBar />
        <Parallax />
        <Products update={update} setUpdate={setUpdate}/>
        <MainProduct />
        <AnimatedAccessory />
        <Footer update={update} />
      </div>
    );
}
  
export default Home;