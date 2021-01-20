const ListCharacterService = require('../../../src/services/ListCharacterService');
const FakeCacheProvider = require('../../providers/fakes/FakeCacheProvider');
const FakeRickAndMortyAPIProvider = require('../../providers/fakes/FakeRickAndMortyAPIProvider');

describe('List Character Service', () => {
  test('retrieving a valid page in service list', async () => {
    const cacheProvider = new FakeCacheProvider();
    const apiProvider = new FakeRickAndMortyAPIProvider();

    const listCharacterService = new ListCharacterService(
      cacheProvider,
      apiProvider,
    );

    const list = await listCharacterService.find(2);

    expect(list.characters).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          name: 'Rick',
        }),
        expect.objectContaining({
          id: 2,
          name: 'Morty',
        }),
      ]),
    );
  });

  test('retrieving a invalid page in service list', async () => {
    const cacheProvider = new FakeCacheProvider();
    const apiProvider = new FakeRickAndMortyAPIProvider();

    const listCharacterService = new ListCharacterService(
      cacheProvider,
      apiProvider,
    );

    const list = await listCharacterService.find(40);

    expect(list.characters).toEqual([]);
  });
});
