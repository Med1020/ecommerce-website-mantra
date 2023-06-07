import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../Context/FilterContext";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  const { state } = useFilter();

  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      if (response.status === 200) {
        const data = await response.json();

        setCategories(data.categories);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="categories">
        <Link to="/">
          <img
            src="../../m.png"
            alt="company logo"
            height="30px"
            className="company-logo"
          />
        </Link>

        {categories.map((category) => {
          const { _id, categoryName } = category;
          return (
            <Link to={`/products`}>
              <li key={_id} className="categoryName">
                {categoryName}
              </li>
            </Link>
          );
        })}
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="searchBar"
        />

        <Link to="/profile">Profile</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Bag</Link>
      </div>
    </>
  );
};

export default NavBar;
