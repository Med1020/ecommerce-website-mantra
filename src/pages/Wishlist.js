import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWishlist } from "../Context/WishlistContext";

const Wishlist = () => {
  const { myWishlist } = useWishlist();
  console.log(myWishlist);
  const [route, setRoute] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setRoute("wishlist");
  }, [route]);
  return (
    <>
      {/* {myWishlist.length > 0 ? (
        <>
          <h2>My Wishlist</h2>
          <main>
            {myWishlist.map(
              ({ _id, productName, price, description, image }) => (
                <Link to={`/products/${_id}`}>
                  <img src={image} alt={productName} />
                  <p>{productName}</p>
                  <p>{description}</p>
                  <p>{price}</p>
                  <button>Add to Bag</button>
                </Link>
              )
            )}
          </main>
        </>
      ) : (
        <main>
          <h2>Wishlist Empty</h2>
          <button onClick={() => navigate("/products")}>
            <span>Click to add items to Wishlist</span>
          </button>
        </main>
      )} */}
    </>
  );
};

export default Wishlist;
