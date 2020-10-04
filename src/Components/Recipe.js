import React, { useContext, useState } from "react";
import { ModalContext } from "../Context/modalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Recipe({ recipe }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { setIdRecipe, recipes, setRecipes } = useContext(ModalContext);

  const showIngredients = (recipes) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipes[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipes[`strIngredient${i}`]} {recipes[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={`Image of ${recipe.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            Recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              setRecipes({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipes.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>{recipes.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={recipes.strDrinkThumb}
                alt=""
              />
              <h3>Ingredients and Amounts</h3>
              <ul>{showIngredients(recipes)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
