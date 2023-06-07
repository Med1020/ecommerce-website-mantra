import React from "react";
import { useCart } from "../Context/CartContex";

const FinalBill = () => {
  const { cart } = useCart();
  const deliveryCharge = 100;
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity);
  return (
    <>
      {" "}
      <div>
        <span>Price Details</span>
      </div>
      <div>
        <span>Price of {cart.length} items</span>
        <span>Rs. {totalPrice}</span>
      </div>
      <div>
        <span>Delivery Charge</span>
        <span>Rs. {deliveryCharge}</span>
      </div>
      <div>
        <button>Place Order</button>
      </div>
    </>
  );
};

export default FinalBill;
