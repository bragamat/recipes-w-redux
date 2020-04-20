import React from "react";
import { Container } from "./styles";

export function Recipe({ activeRecipe: { title, description } }) {
  if (title)
    return (
      <div>
        {title}
        <div>{description}</div>
      </div>
    );

  return <Container>Selecione uma receita</Container>;
}
