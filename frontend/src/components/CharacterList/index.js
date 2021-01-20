import React from "react";
import Character from "../Character";

import { Container } from "./styles";

function CharacterList({ data: characterList }) {
  return (
    <Container>
      {characterList.map((character) => (
        <Character
          key={character.key}
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </Container>
  );
}

export default CharacterList;
