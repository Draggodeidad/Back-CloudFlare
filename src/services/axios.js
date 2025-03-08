const axios = require("axios");

class Client {
  client;
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.cloudflare.com/client/v4",
      headers: {
        Authorization: "Bearer opBrvewyicK_NbRS9iL_0-tCfzQ3MiqY5NdN2x3X",
      },
    });
  }
}

module.exports = Client;
