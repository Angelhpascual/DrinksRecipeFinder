import React, { Fragment, useContext } from "react";
import { recipeContext } from "../Context/recipeContext";
import Recipe from "./Recipe";

function ListRecipes() {
  const { recipes } = useContext(recipeContext);
  console.log(recipes);

  return (
    <Fragment>
      <div className="row mt-5">
        {recipes.map((recipe) => (
          <Recipe key={recipe.idDrink} recipe={recipe} />
        ))}
      </div>
    </Fragment>
  );
}

export default ListRecipes;
