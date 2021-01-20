class CharactersController {
  constructor(listCharacterService) {
    this.listCharacterService = listCharacterService;
  }

  async index(request, response) {
    const { page = 1 } = request.query;
    const characters = await this.listCharacterService.find(page);

    return response.json(characters);
  }
}

module.exports = CharactersController;
