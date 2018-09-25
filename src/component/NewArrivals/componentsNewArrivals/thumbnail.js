import React from 'react'
import AddToCart from './addToCart'

const Thumbnail = (props) => {
  return (
    <div className="product-item col-lg-3 men" style={{ padding: 0 }}>
      <div className="product discount product_filter">
        <div className="product_image">
          <img src={props.thumbnail} alt="" />
        </div>
        <div className="favorite favorite_left"></div>
        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
          {
            props.salePrice < props.originalPrice ? <span>Sale</span> : <span>New</span>
          }
        </div>
        <div className="product_info">
          <h6 className="product_name"><a href="single.html">{props.name}</a></h6>
          <div className="product_price">
            {
              props.salePrice < props.originalPrice ?
                <React.Fragment>{props.salePrice}$  {<span>{props.originalPrice}$</span>}</React.Fragment> :
                `${props.originalPrice}$`
            }
          </div>

        </div>
      </div>
      <AddToCart />
    </div>
  )
}

export default Thumbnail;
