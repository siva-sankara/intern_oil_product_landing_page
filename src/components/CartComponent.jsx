import React from "react";
import './Cart.css';

function CartComponent({ cartItems, quantities, onIncreaseQuantity, onDecreaseQuantity }) {
 
  const calculateTotalAmount = (item) => {
    const quantity = quantities[item.id] || 1;
    return item.price * quantity;
  };

  // Function to calculate the total amount for all items in the cart
  const calculateTotalAmountForCart = () => {
    return cartItems.reduce(
      (totalAmount, item) => totalAmount + calculateTotalAmount(item),
      0
    ).toFixed(2);
  };

  return (
    <div>
     
      
       <div  className="cart-cart-container">
         {cartItems &&
          cartItems.map((item, index) => (
            <li key={index}>
             
              <div className="cart-item">
             <div className="cart-cart">
             <div className="cart-img">
              <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "170px", height: "190px" }}
                />
              </div>

              <div>
              <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-litres">({item.litres})</p>
              </div>
             </div>

                <div className="cart-item-details">                
                  <div className="cart-item-quantity">
                    
                    <div className="cart-cart-btn">
                    <p
                      className="cart-item-quantity-btn"
                      onClick={() => onDecreaseQuantity(item)}
                    >
                      -
                    </p>
                    <span className="cart-item-quantity-value">
                      {quantities[item.id] || 1}
                    </span>
                    <p
                      className="cart-item-quantity-btn"
                      onClick={() => onIncreaseQuantity(item)}
                    >
                      +
                    </p>
                    </div>

                    <p className="cart-item-price">${calculateTotalAmount(item)}</p>
                  </div>
                </div>

                <div className="cart-heart">
                  <div className="cart-cart-fa">
                  <i class="fa-solid fa-heart fa-xl"></i>
                  </div>

                  <div className="remove-cart">
                    <h4 className="remove-heading">Remove</h4>
                  </div>

                  </div>

              </div>
             
            </li>
          ))}
       </div>
      
      
    </div>
  );
}

export default CartComponent;

