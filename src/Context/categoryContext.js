import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Create Context
export const categoryContext = createContext();

//Create a Provider this is where the data come from
const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  // pull the data from API
  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categories = await axios.get(url);
      setCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <categoryContext.Provider
      value={{
        categories,
      }}
    >
      {props.children}
    </categoryContext.Provider>
  );
};

export default CategoryProvider;
