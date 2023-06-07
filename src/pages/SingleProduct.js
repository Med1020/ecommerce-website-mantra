import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContex";

const SingleProduct = () => {
  const { productId } = useParams();
  const { cartDispatch } = useCart();
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      console.log(data);
      setProduct(data.product);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddtoCart = () => {};

  const { _id, productName, price, description, image } = product;

  return (
    <div className="singleProduct">
      <img src={image} alt={productName} />
      <p>{productName}</p>
      <p>{description}</p>
      <p>RS. {price}</p>
      <button onClick={handleAddtoCart}>Add to Cart</button>
      <button>Add to Wishlist</button>
    </div>
  );
};

export default SingleProduct;
