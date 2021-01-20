class FakeCacheProvider {
  constructor() {
    this.hashTable = [];
  }

  async set(key, value) {
    this.hashTable[key] = value;
  }

  async get(key) {
    return this.hashTable[key];
  }
}

module.exports = FakeCacheProvider;
