import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
function FoodItem({id, name, price, description, image, style}) {
  const {cartItems, addItemToCart, removeItemFromCart} = useContext(StoreContext);

  return (
    <div className={"food-item " + style}>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="" />
            {
                cartItems[id]? 
                    <div className='item-count'>
                    <button onClick={() =>{ addItemToCart(id)}}><img src={assets.add_icon_green} alt="" /></button>
                    <p>{cartItems[id]}</p>
                    <button onClick={() => removeItemFromCart(id)}><img src={assets.remove_icon_red} alt="" /></button>
                </div> 
                : 
                <div className='item-count first-add'>
                    <button onClick={() => addItemToCart(id)} className='add-btn'><img src={assets.add_icon_white} alt="" /></button>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price-buy">
                <p>${price}</p>
                <button>Make an order</button>
            </p>
        </div>
    </div>
  )
}

export default FoodItem