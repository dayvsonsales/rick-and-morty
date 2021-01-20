class ListCharacterService {
  constructor(cacheProvider, apiProvider) {
    this.cacheProvider = cacheProvider;
    this.apiProvider = apiProvider;
  }

  async find(page = 1) {
    const characters = await this.apiProvider.getCharacters(page);

    await this.cacheProvider.set(page, { characters, date: new Date() });

    return characters;
  }
}

module.exports = ListCharacterService;
