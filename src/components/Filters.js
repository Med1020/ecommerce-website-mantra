import React, { useEffect, useState } from "react";
import { useFilter } from "../Context/FilterContext";

const Filters = () => {
  const { filterDispatch } = useFilter();
  const [categories, setCategories] = useState([]);

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
  const handleSort = (e) => {
    filterDispatch({
      type: e.target.value,
      payload: e.target.value,
    });
  };

  const handleCategory = (e) => {
    let checked = e.target.checked;
    let option = e.target.value;

    filterDispatch({
      type: "CATEGORY",
      payload: { option, checked },
    });
  };

  const handleClear = () => {
    filterDispatch({
      type: "CLEAR",
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="filters">
      <h3>FILTERS</h3>
      <button onClick={handleClear}>Clear</button>

      <section className="price-filter">
        <p>SORT BY</p>
        <label>
          <input
            type="radio"
            name="price"
            value="lowtohigh"
            onChange={handleSort}
          />
          Price - Low to high
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="price"
            value="hightolow"
            onChange={handleSort}
          />
          Price - High to low
        </label>
      </section>
      <br />
      <section className="category-filter">
        <p>CATEGORIES</p>
        {categories.map(({ categoryName }) => (
          <>
            <label>
              <input
                type="checkbox"
                name={categoryName}
                value={categoryName}
                onClick={handleCategory}
              ></input>
              {categoryName}
            </label>
          </>
        ))}
      </section>

      <br />
      <section className="rating-filter">
        <label for="rating">CUSTOMER RATING</label>
        <br />
        <input
          type="range"
          id="rating"
          list="values"
          min="0"
          max="5"
          step="1"
        />

        <datalist id="values">
          <option value="2.5" label="2.5+"></option>
          <option value="3.0" label="3.0+"></option>
          <option value="3.5" label="3.5+"></option>
          <option value="4.0" label="4.0+"></option>
          <option value="4.5" label="4.5+"></option>
        </datalist>
      </section>
    </div>
  );
};

export default Filters;
