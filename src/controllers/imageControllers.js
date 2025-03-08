const CloudFlareService = require("../services/cloudFlare");

function onNewImage(path) {
  const cloudFlareService = new CloudFlareService();
  return cloudFlareService.uploadImage(path);
}

module.exports = {
  onNewImage,
};
