import React, { useEffect, useState } from "react";
import CharacterList from "../../components/CharacterList";
import Paginator from "../../components/Paginator";

import {
  Container,
  Title,
  ListContainer,
  WrapperContainer,
  Footer,
} from "./styles";

import api from "../../services/api";

function Home() {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    async function loadRickMortyCharacters() {
      if (page < 1) {
        return;
      }

      const { data } = await api.get(`/characters?page=${page}`);

      setCharacters(data.characters);
      setTotal(data.info.count);
    }

    loadRickMortyCharacters();
  }, [page]);

  return (
    <WrapperContainer>
      <Container>
        <Title>
          <p>The Rick and Morty API</p>
        </Title>

        <ListContainer>
          <CharacterList data={characters} />
        </ListContainer>
        <Footer>
          <Paginator
            limit={20}
            page={page}
            total={total}
            handlePaginator={setPage}
          />
        </Footer>
      </Container>
    </WrapperContainer>
  );
}

export default Home;
