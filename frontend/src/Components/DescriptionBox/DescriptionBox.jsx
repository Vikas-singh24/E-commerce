import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <>
    <div className='descriptionbox'>
      <div className="descriptionbox_Navigator">
        <div className="descriptionbox_Nav_Box">
            Description
        </div>
        <div className="descriptionbox_Nav_Box   fade">
           Reviews (122)
        </div>
      </div>
      <div className="descriptionbox_Description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers and conduct transactions without the need for a physical presence</p>
        <p>E-commerce website typically display products or services along with detailed descriptions, images, prices and any available variations</p>
      </div>
    </div>

    </>
  )
}

export default DescriptionBox
