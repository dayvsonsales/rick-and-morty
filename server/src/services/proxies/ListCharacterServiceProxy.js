const cacheConfig = require('../../config/cache');

const CircuitBreaker = require('opossum');
const AppError = require('../../errors/AppError');

const circuitBreakerOptions = {
  errorThresholdPercentage: 50,
  timeout: 10000,
  resetTimeout: 5000,
};

class ListCharacterServiceProxy {
  constructor(cacheProvider, listCharacterService) {
    this.cacheProvider = cacheProvider;
    this.listCharacterService = listCharacterService;

    this.setupCircuits();
  }

  setupCircuits() {
    this.circuitBreaker = new CircuitBreaker(
      page => this.listCharacterService.find(page),
      circuitBreakerOptions,
    );

    this.circuitBreaker.on('open', () => console.log('Circuit is open now'));
    this.circuitBreaker.fallback((from, to, amount, err) => {
      return this.handleFallback(from, to, amount, err);
    });
  }

  async find(page = 1) {
    const cachedCharacters = await this.cacheProvider.get(page);

    if (
      cachedCharacters &&
      new Date().getTime() - new Date(cachedCharacters.date).getTime() <
        Number(cacheConfig.resetTime) * 1000
    ) {
      return cachedCharacters.characters;
    }

    const characters = await this.circuitBreaker.fire(page);

    return characters;
  }

  async handleFallback(page, err) {
    if (err && err instanceof AppError && err.statusCode === 404) {
      this.circuitBreaker.close();

      throw new AppError(err.message, err.statusCode);
    }

    if (err && err.response?.status === 404) {
      this.circuitBreaker.close();

      throw new AppError(`Cannot find characters`, err.response.status);
    }

    const cached = await this.cacheProvider.get(page);

    if (cached) {
      cached.characters.info.outdated = true;
      return cached.characters;
    }

    if (!cached) {
      throw new AppError(
        'The internal service API is down. Try again later.',
        500,
      );
    }

    return cached;
  }
}

module.exports = ListCharacterServiceProxy;
