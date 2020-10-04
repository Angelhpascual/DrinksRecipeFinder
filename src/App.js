import React, { Fragment } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import CategoryProvider from "./Context/categoryContext";
import RecetasProvider from "./Context/recipeContext";
import ListRecipes from "./Components/ListRecipes";
import ModalProvider from "./Context/modalContext";
function App() {
  return (
    <CategoryProvider>
      <RecetasProvider>
        <ModalProvider>
          <Fragment>
            <Header />
            <div className="container mt-5">
              <div className="row">
                <Form />
              </div>
              <ListRecipes />
            </div>
          </Fragment>
        </ModalProvider>
      </RecetasProvider>
    </CategoryProvider>
  );
}

export default App;
