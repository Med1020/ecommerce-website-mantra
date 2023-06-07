import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryProductPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const categories_response = await fetch("/api/category");
      const data = await response.json();
      const data_categories = await categories_response.category;
      setProducts(data.products);
      setCategories(data_categories.categories);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const selectedCategoryName = categories.find(
    (category) => category._id === categoryId
  );
  const filteredProducts = products.filter(
    ({
      _id,
      productName,
      price,
      description,
      categoryName,
      subCategory,
      image,
      rating,
    }) => categoryName.toLowerCase() === selectedCategoryName.toLowerCase()
  );

  return (
    <>
      {filteredProducts.map(
        ({
          _id,
          productName,
          price,
          description,
          categoryName,
          subCategory,
          image,
          rating,
        }) => (
          <>
            <img src={image} alt={productName} />
            <p>{productName}</p>
            <p>{description}</p>
            <p>{price}</p>
          </>
        )
      )}
    </>
  );
};

export default CategoryProductPage;
