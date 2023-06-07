import React, { createContext, useContext, useReducer } from "react";
import FilterReducer from "../Reducer/FilterReducer";

const initialState = {
  price: "",
  categories: "",
  customerRating: "",
};

let FilterContext = createContext(initialState);
const FilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(FilterReducer, {
    sort: "",
    categories: [],
    customerRating: "",
  });
  return (
    <FilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
