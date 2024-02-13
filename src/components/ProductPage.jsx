import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductPage({ handleAddToCart }) {

  const products = [
    {
      id: 1,
      imageUrl: `${process.env.PUBLIC_URL}pr3.png`,
      name: "Pouches",
      litres: "500 ml",
      quant: 0,
      setQuant:0,
      setQuant:0,
      price: 250,
    },
    {
      id: 2,
      imageUrl: "pr6.png",
      name: "Pouches",
      litres: "1 litre",
      quant: 0,
      setQuant:0,
      price: 450,
    },
    {
      id: 3,
      imageUrl: "pr5.png",
      name: "Pet Bottle",
      litres: "500 ml",
      quant: 0,
      setQuant:0,
      price: 150,
    },
    {
      id: 4,
      imageUrl: "pr4.png",
      name: "Pet Bottle",
      litres: "1 litre",
      quant: 0,
      setQuant:0,
      price: 350,
    },
    {
      id: 5,
      imageUrl: "pr1.png",
      name: "Jerry Can",
      litres: "5 litres",
      quant: 0,
      setQuant:0,
      price: 950,
    },
    {
      id: 6,
      imageUrl: "pr7.png",
      name: "Jerry Can",
      litres: "15 litres",
      quant: 0,
      setQuant:0,
      price: 150,
    },
    {
      id: 7,
      imageUrl: "pr2.png",
      name: "Tins",
      litres: "15 litres",
      quant: 0,
      setQuant:0,
      price: 150,

    },
  ];

  const [allProducts, setAllProducts] = useState(
    products
  );

  const [showQuant, setShowQuant] = useState("");
  const [showQuant10, setShowQuant10] = useState("");

  const [itemsAdded, setItemsAdded] = useState(0);

  const handleIncrementClick = (product) => {
    allProducts.map((obj) =>
    {
      if(obj.id === product.id  ){
        obj.quant = obj.quant+1;
        setItemsAdded(itemsAdded+1);
      }
    } )
  }
  const handleDecrementClick = (product) => {
    allProducts.map((obj) =>
    {
      if(obj.id === product.id && obj.quant >=1){
        obj.quant = obj.quant-1;
        setItemsAdded(itemsAdded-1);
      }

    } )
  }
  const  handleIncrementClickSet= (product) => {
    allProducts.map((obj) =>
    {
      if(obj.id === product.id  ){
        obj.setQuant = obj.setQuant+1;
        setItemsAdded(itemsAdded+1);
      }
    } )
  }
  const handleDecrementClickSet = (product) => {
    allProducts.map((obj) =>
    {
      if(obj.id === product.id && obj.setQuant >= 1){
        obj.setQuant = obj.setQuant-1;
        setItemsAdded(itemsAdded-1);
      }
    } )
  }

  const handleShowQuant = (id, product) => {
    allProducts.map((obj) =>
    {
      if(obj.id === product.id  ){
        obj.quant = obj.quant+1;
        setItemsAdded(itemsAdded+1);
      }
    } )
    setShowQuant(id);
    setShowQuant10(!showQuant10);
    handleAddToCart(product);
  };

  const handleShowQuant10 = ( product) => {
    allProducts.map((obj) =>
    {
      if(obj.id === product.id  ){
        obj.setQuant = obj.setQuant+1;
        setItemsAdded(itemsAdded+1);
      }
    } )
    setShowQuant10(product.id);
    setShowQuant(!showQuant);
  };



  return (
    <div className="product-container">

      <h2 className="product-heading-main">
        Discover the Radiance of Mustard Oil, In 9 Distinctive Sizes
      </h2>
      <div className="product-grid">
        {allProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <p className="prouct-name">{product.name}</p>
              <p className="product-litres">{product.litres}</p>
              <div className="button-item">
                <button className="addtocart-btn">Buy 1</button>
                {showQuant === product.id  || product.quant>= 1 ? (
                  <div className="qunatity-container">
                    <div className="choose-quantity">
                      <p onClick={() => handleDecrementClick(product)}>
                        <b>-</b>
                      </p>
                      <p>{allProducts.map((obj)=> obj.id === product.id && (obj.quant))}</p>
                      <p onClick={() => handleIncrementClick(product)} >
                        <b>+</b>
                      </p>
                    </div>
                  </div>
                ) : (
                  <p
                    style={{ minWidth: "130px" }}
                    onClick={() =>
                      handleShowQuant(product.id , product)
                    }>
                    <u>Add to cart</u>
                  </p>
                )}
              </div>
              <br />

              <div className="button-item btn-item-2">
                <button className="addtocart-btn">Buy set (10)</button>
                {showQuant10 === product.id || product.setQuant>=1 ? (
                  <div className="qunatity-container">
                    <div className="choose-quantity">
                      <p onClick={() => handleDecrementClickSet(product)}>
                        <b>-</b>
                      </p>
                      <p>{allProducts.map((obj)=> obj.id === product.id && (obj.setQuant))}</p>
                      <p onClick={() => handleIncrementClickSet(product)}>
                        <b>+</b>
                      </p>
                    </div>
                  </div>
                ) : (
                  <p style={{ minWidth: "130px" }} onClick={()=>handleShowQuant10(product)}>
                    <u>Add to cart</u>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {itemsAdded < 1 ? (
        <div></div>
      ) : (
        
          <Link
            to="/cart"
            style={{ fontSize: "15px", color: "white", textDecoration: "none" }}
          >
            <button className="item-added-btn">
            {" "}
            {`${itemsAdded} Items Added -->`}
            <br></br>total Amount : 00.00
            </button>
          </Link>
        
      )}
    </div>
  );
}

export default ProductPage;
