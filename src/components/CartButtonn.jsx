import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const CartButtonn = () => {
  return (
    <div className="cart-button-container" >
      <Link to="/product" className="cart-link">
        <svg
         
          class="w-[1px] h-[1px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>
    
      </Link>
    </div>
  );
};

export default CartButtonn;
