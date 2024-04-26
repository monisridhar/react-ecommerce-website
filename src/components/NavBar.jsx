import './NavBar.css';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';

function NavBar(){

    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);


    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} height={40} width={40}/>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="" height={30} width={30}/></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )

}

export default NavBar;