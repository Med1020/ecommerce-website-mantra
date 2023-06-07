import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContex";

const ProductInCart = ({ product }) => {
  const { _id, productName, price, image, rating } = product;
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    navigate("/cart");
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const isItemInCart = cart.find((item) => item._id === _id);

  return (
    <>
      <div>
        <img src={image} alt={productName} />
      </div>
      <div>
        <div>{productName}</div>
        <div>
          <p>Rs. {price}</p>
          <p>
            {rating} <span>star</span>
          </p>
        </div>
        <div>
          <button onClick={isItemInCart ? handleGoToCart : handleAddToCart}>
            <span>shopping_cart</span>
            {isItemInCart ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInCart;
