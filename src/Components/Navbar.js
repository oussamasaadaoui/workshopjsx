import'./Navbar.css'
import MYcount from'../Mycount.webp'
import {AiOutlineShoppingCart} from 'react-icons/ai';
function Navbar(){
    return (
         <nav>
          <img src="Logo.png" style={{height:'50px'}} alt="logo"/>
        <ul className="menu">
          <li>about us</li>
          <li>product list</li>
          <li>contact</li>
        </ul>
        <div style={{display:'flex'}}>
        <AiOutlineShoppingCart/>
       <img src={MYcount}style={{width:'50px'}}/>
        </div>
      </nav> 
    )
}
export default Navbar;
export function Footer(){
    return(
        <footer>
        <p>copy right group f2 </p>
      </footer>
    )
}
