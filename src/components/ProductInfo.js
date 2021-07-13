import React from "react";

import "./css/Products.css";

function ProductInfo(props) {
  const { product, onAdd } = props;
  return (
    <>
      <div className="basket" key={product.id} product={product}>
        <img src={product.src} alt="" />
        <div >
          <h3>{product.title}</h3>
          <span>€{product.price}</span>
          <p>{product.description}</p>
          <button onClick={() => onAdd(product)}>Add to Basket</button>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
