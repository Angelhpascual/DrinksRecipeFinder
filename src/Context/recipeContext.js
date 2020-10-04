import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const recipeContext = createContext();

const RecetasProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearchRecipes] = useState({
    name: "",
    category: "",
  });
  const [request, setRequest] = useState(false);

  const { name, category } = searchRecipes;

  useEffect(() => {
    if (request) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        const result = await axios.get(url);
        setRecipes(result.data.drinks);
      };
      getRecipes();
    }
  }, [searchRecipes]);

  return (
    <recipeContext.Provider
      value={{
        recipes,
        setSearchRecipes,
        setRequest,
      }}
    >
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecetasProvider;
