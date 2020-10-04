import React, { useContext, useState } from "react";
import { categoryContext } from "../Context/categoryContext";
import { recipeContext } from "../Context/recipeContext";

function Form() {
  const { categories } = useContext(categoryContext);
  const { setSearchRecipes, setRequest } = useContext(recipeContext);

  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchRecipes(search);
        setRequest(true);
      }}
      className="col-12"
    >
      <fieldset className="text-center">
        <legend>Search by Category or Ingredients</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control"
            placeholder="Search by an Ingredients..."
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">-- Select a Category --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search Recipes"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
