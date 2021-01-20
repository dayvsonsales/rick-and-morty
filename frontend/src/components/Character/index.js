import React from "react";

import MemoImage from "../MemoImage";

import { Container, Data } from "./styles";

function Character({ id, name, image }) {
  return (
    <Container>
      <MemoImage alt={name} src={image} />
      <Data>
        <h1>{name}</h1>
        <p>
          <strong>ID: </strong>
          {id}
        </p>
      </Data>
    </Container>
  );
}

export default Character;
