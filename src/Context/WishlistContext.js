import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { WishlistReducer } from "../Reducer/WishlistReducer";

const wishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishlist, wishlistDispatch] = useReducer(WishlistReducer, {
    myWishlist: [],
  });
  const addToWishlist = async (product, setAlert, title, productCategory) => {
    try {
      const {
        data: { wishlist },
      } = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      wishlistDispatch({
        type: "WISHLIST",
        payload: product,
      });
      setAlert({
        open: true,
        message: `${title} - ${productCategory} Added To Wishlist`,
        type: "success",
      });
    } catch (err) {
      console.log(err);
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error",
      });
    }
  };

  const removeFromWishlist = async (product, setAlert) => {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`api/user/wishlist/${product._id}`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product._id,
      });
      setAlert({
        open: true,
        message: "Item Removed From Wishlist",
        type: "success",
      });
    } catch (err) {
      console.log(err);
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error",
      });
    }
  };
  return (
    <wishlistContext.Provider
      value={{ wishlist, wishlistDispatch, addToWishlist, removeFromWishlist }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);
export { useWishlist, WishlistProvider };
