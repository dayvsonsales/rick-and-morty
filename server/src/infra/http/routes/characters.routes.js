const { Router } = require('express');

const ListCharacterService = require('../../../services/ListCharacterService');

const CharactersController = require('../controllers/CharactersController');

const AxiosHTTPProvider = require('../../providers/HTTPProvider/AxiosHTPPProvider');
const RedisCacheProvider = require('../../providers/CacheProvider/RedisCacheProvider');
const RickAndMortyAPIProvider = require('../../providers/RickAndMortyProvider/RickAndMortyAPIProvider');
const ListCharacterServiceProxy = require('../../../services/proxies/ListCharacterServiceProxy');

const httpProvider = new AxiosHTTPProvider();
const cacheProvider = new RedisCacheProvider();
const apiProvider = new RickAndMortyAPIProvider(httpProvider);

const charactersRouter = Router();
const charactersController = new CharactersController(
  new ListCharacterServiceProxy(
    cacheProvider,
    new ListCharacterService(cacheProvider, apiProvider),
  ),
);

charactersRouter.get('/', (request, response) =>
  charactersController.index(request, response),
);

module.exports = charactersRouter;
