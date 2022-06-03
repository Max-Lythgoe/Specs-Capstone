import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import CartPage from './Components/Pages/CartPage';
import CategoriesPage from './Components/Pages/Categories';
import Support from './Components/Pages/Support';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />}/>
        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
