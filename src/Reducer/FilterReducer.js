import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "lowtohigh":
      return {
        ...state,
        sort: action.payload,
      };
    case "hightolow":
      return {
        ...state,
        sort: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        categories: action.payload.check
          ? [...state.categories, action.payload.option]
          : state.categories.length > 0
          ? state.categories.filter(
              (category) => category !== action.payload.option
            )
          : [],
      };
    case "CLEAR":
      return {
        ...state,
        sort: "",
        categories: [],
        customerRating: "",
      };

    default:
      return state;
  }
};

export default FilterReducer;
