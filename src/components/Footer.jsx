import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import Hero from './Hero';

function Footer(){

    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="footer-icons-container">
                    <i class="fa-brands fa-pinterest"></i>
                </div>
                <div className="footer-icons-container">
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2024 - All Rights Reserved.</p>
                </div>
            

        </div>
    )
}

export default Footer;