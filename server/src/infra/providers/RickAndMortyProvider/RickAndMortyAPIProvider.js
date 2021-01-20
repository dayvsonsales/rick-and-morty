const AppError = require('../../../errors/AppError');

const URL = 'https://rickandmortyapi.com';
const END_POINT = '/api/character';

const APP_URL = `${
  process.env.URL || 'http://localhost:3333'
}/characters?page=`;

class RickAndMortyAPIProvider {
  constructor(httpProvider) {
    this.httpProvider = httpProvider;
  }

  async getCharacters(page = 1) {
    try {
      const { data } = await this.httpProvider.get(
        `${URL}${END_POINT}?page=${page}`,
      );

      return {
        info: {
          ...data.info,
          next:
            Number(page) + 1 <= Number(data.info.pages)
              ? `${APP_URL}${Number(page) + 1}`
              : null,
          prev: Number(page) != 1 ? `${APP_URL}${Number(page) - 1}` : null,
        },
        characters: data.results
          ? data.results.map(result => ({
              id: result.id,
              name: result.name,
              image: result.image,
            }))
          : [],
      };
    } catch (e) {
      throw new AppError(e.message, 500);
    }
  }
}

module.exports = RickAndMortyAPIProvider;
