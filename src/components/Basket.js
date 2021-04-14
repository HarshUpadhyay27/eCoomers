import React from "react";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const gst = itemPrice * 0.3;
  const shippingPrice = itemPrice > 2000 ? 0 : 75;
  const totalPrice = itemPrice + gst + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Item</h2>
      <div>{cartItems.lenght === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row cart-item">
          <div className="col-2 cart-img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="col-2">{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} X ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.lenght !== 0 && (
        <>
          <hr/>
          <div className="row">
            <div className="col-2">Item Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Total GST</div>
            <div className="col-1 text-right">${gst.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"><h2>Total Price</h2></div>
            <div className="col-1 text-right"><h2>${totalPrice.toFixed(2)}</h2></div>
          </div>
        </>
      )}
      <hr/>
      <div className="row">
        <button onClick={()=>alert('Check Out')}>Check Out</button>
      </div>
    </aside>
  );
};

export default Basket;
