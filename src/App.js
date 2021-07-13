import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Products from "./components/AllProducts";
import Basket from "./components/Basket";
import Home from'./components/Home';
import Data from "./data.json";
import './index.css'

function App() {
  const [addItems, setAddItems] = useState([]);
  const { products } = Data;

  const onAdd = (product) => {
    const exist = addItems.find((x) => x.id === product.id);
    if (exist) {
      setAddItems(
        addItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setAddItems([...addItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = addItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setAddItems(addItems.filter((x) => x.id !== product.id));
    } else {
      setAddItems(
        addItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    const exist = addItems.find((x) => x.id === product.id);
    if (exist) {
      setAddItems(
        addItems.filter((x) =>
          x.id !== product.id ))
    } else {
      setAddItems([...addItems,]);
    }
  };

  return (
    <div className="app">
      <Router>
        <Header count={addItems.length} />
        <Routes>
        <Route
            exact
            path="/"
            element={<Home/>}
          />
          <Route
            exact
            path="/product"
            element={<Products products={products} onAdd={onAdd} />}
          />
          <Route
            exact
            path="/Basket"
            element={
              <Basket
                onAdd={onAdd}
                addItems={addItems}
                onRemove={onRemove}
                onDelete={onDelete}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
