import './App.css';
import Shop from './components/Shop';
import Cart from './components/Cart';
import LoginSignup from './components/LoginSignup';
import Product from './components/Product';
import ShopCategory from './components/ShopCategory';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />

      </Routes>
      <LoginSignup/>
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
