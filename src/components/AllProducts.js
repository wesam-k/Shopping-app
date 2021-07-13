import React from "react";

import ProductInfo from './ProductInfo'
import "./css/Products.css";

function Products(props) {
  const {products, onAdd} = props;

  return (
    <div id="products" >
          {products.map((product)=>
          <ProductInfo key={product.id} onAdd={onAdd} product={product}/>
          )}
    </div>
  );
}

export default Products;
