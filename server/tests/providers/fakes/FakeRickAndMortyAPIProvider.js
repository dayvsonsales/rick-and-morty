class FakeRickAndMortyAPIProvider {
  async getCharacters(page = 1) {
    return {
      info: {
        count: 671,
        pages: 34,
        next: Number(page) != 34 ? page + 1 : null,
        prev: Number(page) != 1 ? page - 1 : null,
      },
      characters:
        page <= 34
          ? [
              {
                id: 1,
                name: 'Rick',
              },
              {
                id: 2,
                name: 'Morty',
              },
            ]
          : [],
    };
  }
}

module.exports = FakeRickAndMortyAPIProvider;
