import React, {useContext, useState} from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <>
    <div className ='navBar' >
      <div className="nav_Logo">
        <img src={logo} alt="" />
        <p>ShopyStyle</p>
      </div>
      <ul className='nav_Menu'>
        <li onClick={()=>{setMenu("shop")}} > <Link style={{textDecoration: "none",color:"#626262"}} to='/'>Shop</Link> {menu=="shop"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("men")}} ><Link style={{textDecoration: "none",color:"#626262"}} to='/men'>Men</Link> {menu=="men"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}} ><Link style={{textDecoration: "none",color:"#626262"}} to='/women'>women</Link> {menu=="women"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration: "none",color:"#626262"}} to='/kids'>kids</Link> {menu=="kids"? <hr/>:<></>}</li>
      </ul>
      <div className="nav_Login_Cart">
       <Link style={{textDecoration: "none"}} to='/login'><button>Login</button></Link> 
        <Link style={{textDecoration: "none"}} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav_Cart_Count">{getTotalCartItems()}</div>
      </div>
    </div>

    </>
  )
}

export default Navbar
