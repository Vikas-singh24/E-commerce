import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}= useContext(ShopContext)
  return (
    <>
    <div className='cartitems'>
      <div className="cartitems_Format_Main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return  <div>
        <div className="cartitems_Format cartitems_Format_Main">
            <img src={e.image} alt="" className='carticon_Product_Icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems_Quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='cartitems_Remove_Icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
        
      </div>
        }
        return null
      })}
      <div className="cartitems_Down">
        <div className="cartitems_Total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems_Total_Item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems_Total_Item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                
                <div className="cartitems_Total_Item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>

            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems_Promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems_Promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cartitems
