import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
  );
}

export default App;
