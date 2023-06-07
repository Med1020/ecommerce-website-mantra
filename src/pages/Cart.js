import React from "react";
import { useCart } from "../Context/CartContex";
import ProductInCart from "../components/ProductInCart";
import FinalBill from "../components/FinalBill";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      {cart && cart.length > 0 ? (
        <h2>Your Cart has ({cart.length}) items</h2>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
      <main>
        <div>
          {cart && cart.length > 0
            ? cart.map((product) => (
                <ProductInCart product={product} key={product._id} />
              ))
            : ""}
        </div>
        <div>{cart && cart.length > 0 && <FinalBill />}</div>
      </main>
    </>
  );
};

export default Cart;
