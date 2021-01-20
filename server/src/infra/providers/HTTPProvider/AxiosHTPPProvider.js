const axios = require('axios');

class AxiosHTTPProvider {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.URL || 'http://localhost:3000',
    });
  }

  async get(url, options) {
    const data = await this.api.get(url, options);

    return data;
  }

  async post(url, postData, options) {
    const data = await this.api.post(url, postData, options);

    return data;
  }
}

module.exports = AxiosHTTPProvider;
