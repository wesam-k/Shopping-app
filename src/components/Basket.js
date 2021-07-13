import React from "react";

import "./css/Basket.css";

function Basket(props) {
  const { addItems, onAdd, onRemove, onDelete } = props;
  const totalAmount = addItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <section className="wrapper">
      <div>
        {addItems.length === 0 && (
          <h2 style={{ textAlign: "center" }}>
            The Basket is empty add your favorite products{" "}
          </h2>
        )}
      </div>
      {addItems.map((item) => (
        <div className="details cart" key={item.id}>
          <img src={item.src} alt="" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>€{item.price * item.qty}</span>
            </div>
            <p>{item.description}</p>
            <p>{item.content}</p>
            <div className="amount">
              <button className="count" onClick={() => onRemove(item)}>
                -
              </button>
              <span>{item.qty}</span>
              <button className="count" onClick={() => onAdd(item)}>
                +
              </button>
            </div>
          </div>
          <div className="delete" onClick={() => onDelete(item)}>
            X
          </div>
        </div>
      ))}
      {addItems.length !== 0 && (
        <button className="total">
          Checkout <strong>€{totalAmount.toFixed(2)}</strong>
        </button>
      )}
    </section>
  );
}

export default Basket;
