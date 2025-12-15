import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <>
    <div className='productdisplay'>
      <div className="productdisplay_Left">
            <div className="productdisplay_Img_List">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay_Img">
                <img className='productdisplay_Main_Img' src={product.image} alt="" />
            </div>
      </div>

      <div className="productdisplay_Right">
        <h1>{product.name}</h1>
        <div className="productdisplay_Right_Stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
        </div>
        <div className="productdisplay_Right_Prices">
            <div className="productdisplay_Right_Price_Old">${product.old_price}</div>
            <div className="productdisplay_Right_Price_New">${product.new_price}</div>
        </div>
        <div className="productdisplay_Right_Description">
            A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves
        </div>
        <div className="productdisplay_Right_Size">
            <h1>Select Size</h1>
            <div className="productdisplay_Right_Sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay_Right_Category'>
            <span>Category :</span>  Women, T-Shirt , Crop Top  
            </p>
            <p className='productdisplay_Right_Category'>
            <span>Tags :</span>  Morden, Latest 
            </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDisplay
