import React, { useState } from "react";
import CartComponent from "./CartComponent";
import "./Cart.css";
import { Link } from "react-router-dom";

function CartPage({ handleOrderItem,cartItems }) {
  const [quantities, setQuantities] = useState({});

   // Function to calculate total amount for an item
   const calculateTotalAmount = (item) => {
    const quantity = quantities[item.id] || 1;
    return item.price * quantity; 
  };

  // Function to calculate the total amount for all items in the cart
  const calculateTotalAmountForCart = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += calculateTotalAmount(item);
    });
    return totalAmount;
  };

  // Function to get the GST rate
  const gstRate = () => {
    return 0.12; // 12%
  };

  // Function to calculate the GST amount
  const calculateAmountGst = () => {
    const totalAmount = parseFloat(calculateTotalAmountForCart()); // Convert to float
    const gstAmount = (totalAmount * gstRate()).toFixed(2); // Calculate 12% GST
    const totalWithGst = (totalAmount + parseFloat(gstAmount)).toFixed(2); 
    return parseFloat(totalWithGst); // Convert to float
  };

   // Define gstAmount function here
   const gstAmount = () => {
    return (parseFloat(calculateTotalAmountForCart()) * gstRate()).toFixed(2);
  };

  const onIncreaseQuantity = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: (prevQuantities[item.id] || 0) + 1,
    }));
  };

  const onDecreaseQuantity = (item) => {
    if (quantities[item.id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: prevQuantities[item.id] - 1,
      }));
    }
  };

  const handleOrderSummary =()=>{
    const val = calculateAmountGst();
    handleOrderItem(cartItems , val) ;
  }
  return (
    <div className="cart-container">
      <div className="cart-cart-1">
      <h1 className="heading-heading">Shopping Cart</h1>
      <CartComponent
        cartItems={cartItems}
        quantities={quantities}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
      />
      </div>
      <div className="cart-cart-1">
      <div className="cart-cart-2">
      <h2 className="cart-heading">Have Coupon ?</h2>
      <div className="coupon-cart">
      <div className="code-cart-btn">
        <p className="code-cart-btn-text">Coupon Code</p>
      </div>
      <div className="cart-btn">  
         <a href="#" className="cart-btn-text">Apply</a>
      </div>
      </div>
      </div>
      </div>

      <div className="cart-cart-1">
        <h2 className="cart-heading">Bill Summary</h2>

        <div className="cart-bill">
          <span className="cart-bill-right">Item Total</span> <span className="cart-right">Rs.{calculateTotalAmountForCart()}</span>
          <br/><br/>
          <span className="cart-bill-right" style={{color:"gray"}}>Delivery Fee | 3.0 kms</span> <span  className="cart-right-1">FREE</span>
          <br/><br/>
          <span className="cart-bill-right">GST</span> <span className="cart-right-2">Rs.{gstAmount()}</span>
          <br></br><hr/>
          <span className="cart-bill-right">To Pay</span> <span className="cart-right-3"> Rs. {calculateAmountGst()}</span>
          
        </div>

        <div class="container">

           <div class="cartpage-btn">
            <span class="button-text" onClick={()=>handleOrderSummary()}><Link to='/order'>Proceed with Payment</Link></span>
           </div>
        </div>
      </div>

    </div>
  );
}

export default CartPage;
