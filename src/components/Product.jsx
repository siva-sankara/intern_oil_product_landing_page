import React from "react";
import ProductPage from './ProductPage';
import Foot from './Foot';

function Product({ handleAddToCart, cartItems }) {
    return (
        <div>
            <ProductPage handleAddToCart={handleAddToCart} />
            <Foot />
        </div>
    );
};
export default Product;