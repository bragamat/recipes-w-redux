import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Container, List, ListItem } from "./styles";

import { Header, Modal } from "./components";
import GlobalStyles from "../globalStyle";
import { useDispatch } from "react-redux";

import { addRecipe } from "./store/recipes";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <List>
        {recipes.map(({ id, title, description }) => (
          <React.Fragment key={id}>
            <ListItem>{title}</ListItem>
            <div> - {description}</div>
          </React.Fragment>
        ))}
      </List>
      <button onClick={() => dispatch(addRecipe("a"))}>
        adicionar receita
      </button>
      <Modal
        openModal={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setRecipes={setRecipes}
      />
    </Container>
  );
}

export default hot(App);
