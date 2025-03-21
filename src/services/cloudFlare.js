const Client = require("./axios");
const fs = require("fs");
const FormData = require("form-data");
class CloudFlare extends Client {
  static intance;

  constructor() {
    super();
  }

  static getInstance() {
    if (!CloudFlare.intance) {
      CloudFlare.intance = new CloudFlare();
    }
    return CloudFlare.intance;
  }

  uploadImage(path) {
    const formData = new FormData();
    const image = fs.createReadStream(path);
    formData.append("file", image);
    return this.client.post(
      "/accounts/6749431195f4f2593ec006a76916e4e1/images/v1",
      formData
    );
  }

  deleteImage(imageId) {
    return this.client.delete(
      "/accounts/6749431195f4f2593ec006a76916e4e1/images/v1" + imageId
    );
  }
}

module.exports = CloudFlare;
