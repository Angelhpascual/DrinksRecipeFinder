import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Create the context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const result = await axios.get(url);
      setRecipes(result.data.drinks[0]);
    };
    getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider
      value={{
        recipes,
        setIdRecipe,
        setRecipes,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
