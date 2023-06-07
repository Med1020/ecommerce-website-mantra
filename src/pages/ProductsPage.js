import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filters from "../components/Filters";
import { useFilter } from "../Context/FilterContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { state } = useFilter();
  const getProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getsortedProducts = () => {
    const sortedProducts =
      state.sort === "lowtohigh"
        ? products.sort((item1, item2) => item1.price - item2.price)
        : state.sort === "hightolow"
        ? products.sort((item1, item2) => item2.price - item1.price)
        : products;

    return sortedProducts;
  };

  const getProductsByCategory = () => {
    const productsByCategory = products.filter(({ categoryName }) =>
      state.categories.length > 0
        ? state.categories.includes(categoryName)
        : products
    );
    return productsByCategory;
  };

  const FilteredProducts = getsortedProducts();
  console.log(getProductsByCategory());
  return (
    <>
      <Filters />
      <div className="productPage">
        {FilteredProducts.length > 0 ? (
          FilteredProducts.map(
            ({ _id, productName, price, description, categoryName, image }) => (
              <Link to={`/products/${_id}`}>
                <img src={image} alt={productName} />
                <p>{productName}</p>
                <p>{description}</p>
                <p>{price}</p>
                <button>Add to Bag</button>
              </Link>
            )
          )
        ) : (
          <span>Nothing to display</span>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
