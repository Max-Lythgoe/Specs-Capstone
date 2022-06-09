import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import CartPage from './Components/Pages/CartPage';
import CategoriesPage from './Components/Pages/Categories';
import Support from './Components/Pages/Support';
import CartProvider from './store/CartProvider';

function App() {
  const [update, setUpdate] = useState(0)
  console.log(update)
  return (
    <CartProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home update={update} setUpdate={setUpdate} />} />
        <Route path="/categories" element={<CategoriesPage update={update} setUpdate={setUpdate} />}/>
        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<CartPage update={update} setUpdate={setUpdate} />} />
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
