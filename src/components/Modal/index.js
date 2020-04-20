import React, { useState } from "react";
import { Container } from "./styles";

export function Modal({ openModal, setRecipes, setIsModalOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addRecipe = () => {
    if (!title || !description) {
      return false;
    }

    setRecipes(content => [
      ...content,
      { id: Math.random(4), title, description }
    ]);

    setDescription("");
    setTitle("");
    setIsModalOpen(false);
  };

  if (openModal)
    return (
      <Container>
        <button onClick={() => setIsModalOpen(st => !st)}>CLOSE</button>

        <label htmlFor="recipe-title">Nome da Receita</label>
        <input
          type="text"
          id="recipe-title"
          name="titulo da receita"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <label htmlFor="recipe-description">Descrição da receita</label>
        <textarea
          type="text"
          id="recipe-description"
          name="descrição da receita"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <button onClick={addRecipe}>Adicionar receita</button>
      </Container>
    );
  return null;
}
